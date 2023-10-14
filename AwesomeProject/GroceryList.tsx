import React from 'react';
import { View, Button } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  RewardsPage: undefined;
  NovaScore: undefined;
  Home: undefined;
};

type GroceryListProps = {
  navigation: NavigationProp<RootStackParamList, 'RewardsPage'>;
  route: RouteProp<RootStackParamList, 'RewardsPage'>;
};

const GroceryList: React.FC<GroceryListProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to RewardsPage"
        onPress={() => navigation.navigate('RewardsPage')}
      />
      <Button
        title="Go to NovaScore"
        onPress={() => navigation.navigate('NovaScore')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default GroceryList;
