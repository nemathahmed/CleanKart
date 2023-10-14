import React from 'react';
import { View, Button } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  GroceryList: undefined;
  RewardsPage: undefined;
  NovaScore: undefined;
  Home: undefined;
};

type RewardsPageProps = {
  navigation: NavigationProp<RootStackParamList, 'RewardsPage'>;
  route: RouteProp<RootStackParamList, 'RewardsPage'>;
};

const RewardsPage: React.FC<RewardsPageProps> = ({ navigation }) => {
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
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default RewardsPage;
