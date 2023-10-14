import React from 'react';
import { View, Button } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  GroceryList: undefined;
  RewardsPage: undefined;
  NovaScore: undefined;
  Home: undefined;
};

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to GroceryList"
        onPress={() => navigation.navigate('GroceryList')}
      />
      <Button
        title="Go to NovaScore"
        onPress={() => navigation.navigate('NovaScore')}
      />
      <Button
        title="Go to RewardsPage"
        onPress={() => navigation.navigate('RewardsPage')}
      />
    </View>
  );
};

export default HomeScreen;
