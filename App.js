// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MapScreen from './app/screens/MapScreen';
import HomeScreen from './app/screens/HomeScreen';
import BottomBar from './app/components/BottomBar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App Executing");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Map"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
