import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraKitCameraScreen from 'react-native-camera-kit';
import { NavigationProp, RouteProp } from '@react-navigation/native';
type RootStackParamList = {
    GroceryList: undefined;
    RewardsPage: undefined;
    NovaScore: undefined;
    Home: undefined;
    CameraScreen:undefined;
  };
  
  type CameraScreenProps = {
    navigation: NavigationProp<RootStackParamList, 'CameraScreen'>;
    route: RouteProp<RootStackParamList, 'CameraScreen'>;
  };


  const CameraScreen: React.FC<CameraScreenProps> = ({ route, navigation }) =>{
  const [scannedBarcode, setScannedBarcode] = useState(null);
  const [inputBarcode, setInputBarcode] = useState('');

  const onBarcodeScan = ({ barcodes }) => {
    if (barcodes.length > 0) {
      // Handle scanned barcode data
      setScannedBarcode(barcodes[0].data);
    }
  };

  const handleSearch = () => {
    if (!inputBarcode) {
      console.log("Please enter a valid barcode.");
      return;
    }
  
    const apiUrl = `https://world.openfoodfacts.net/api/v2/product/${inputBarcode}`;
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data here
        console.log('API Response:', data);
        // You can update the state or perform other actions with the API data
        const productData = data.product;
        const productName = productData.product_name;
        const novaScore = productData.nova_groups;
        const nutritionalInfo = productData.nutriments;
        const productImage = productData.image_url;
        console.log(productName,novaScore,nutritionalInfo,productImage)
        navigation.navigate('NovaScore', {
            productName,
            novaScore,
            productImage,
          });
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };
  

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={({ barcodes }) => onBarcodeScan({ barcodes })}
      />
      {scannedBarcode && <Text>Scanned Barcode: {scannedBarcode}</Text>}
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Barcode"
          onChangeText={(text) => setInputBarcode(text)}
          value={inputBarcode}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
});

export default CameraScreen;
