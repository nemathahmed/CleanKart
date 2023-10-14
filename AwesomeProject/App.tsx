import React from 'react';
import {View, Text} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        height: 100,
        padding: 20,
      }}>
      <Text>Welcome User!</Text>
      <Text>Grocery Points: </Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;