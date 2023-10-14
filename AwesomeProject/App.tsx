import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import NovaScore from './NovaScore';
import GroceryList from './GroceryList';
import RewardsPage from './RewardsPage';
import CameraScreen from './CameraScreen'; // Import your CameraScreen component

type RootStackParamList = {
  Home: undefined;
  NovaScore: undefined;
  GroceryList: undefined;
  RewardsPage: undefined;
  CameraScreen: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  NovaScore: undefined;
  GroceryList: undefined;
  RewardsPage: undefined;
  CameraScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NovaScore" component={NovaScore} />
      <Tab.Screen name="GroceryList" component={GroceryList} />
      <Tab.Screen name="RewardsPage" component={RewardsPage} />
      <Tab.Screen name="CameraScreen" component={CameraScreen} />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" headerMode="none">
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
