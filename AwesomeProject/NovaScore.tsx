import React from 'react';
import { View, Button,Text, Image, StyleSheet } from 'react-native';

import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

type RootStackParamList = {
  RewardsPage: undefined;
  GroceryList: undefined;
  Home: undefined;
  NovaScore: {
    productName: string;
    novaScore: number;
    productImage: string;
  };
};
type NovaScoreProps = {};

const NovaScore: React.FC<NovaScoreProps> = () => {
  const route = useRoute();
  const {
    productName,
    novaScore,
    productImage,
  } = route.params as RootStackParamList['NovaScore'];
  return (
    <View style={styles.container}>
      <Image source={{ uri: productImage }} style={styles.productImage} />
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.novaScore}>Nova Score: {novaScore}</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  novaScore: {
    fontSize: 16,
    marginTop: 10,
  },
  nutritionalInfo: {
    fontSize: 14,
    marginTop: 10,
  },
});
export default NovaScore;
