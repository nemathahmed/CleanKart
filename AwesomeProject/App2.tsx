import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Button} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10, color: 'black'}}>This item is</Text>
      <Text style={{fontSize: 50, textAlign: 'center', marginTop: 10, color: '#CF142B', fontWeight: 'bold'}}>Ultraprocessed</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10, color: 'black'}}>Suggested Alternatives</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={{flexDirection: 'row',marginLeft:70}}>
        <Text style={{fontSize: 30, color: 'black'}}>Option 1    </Text>
        <Text style={{fontSize: 30, color: 'black'}}>Option 2</Text>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Button title = "Add to Grocery List"></Button>
    </View>
  );
};

export default ViewBoxesWithColorAndText;

