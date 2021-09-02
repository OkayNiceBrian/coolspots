// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Home from './app/screens/Home';
import SpotViewScreen from './app/screens/SpotViewScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  console.log("App Executing");

  return <SpotViewScreen />;

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen 
  //         name="Welcome"
  //         component={WelcomeScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen 
  //         name="Home"
  //         component={Home}
  //         options={{ headerShown: true }} // Change to false for production
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}
