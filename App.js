// import { StatusBar } from 'expo-status-bar';
import './global';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './app/screens/HomeTab';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App Executing");
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
            <Stack.Screen 
                name="Home"
                component={HomeTab}
                options={{ headerShown: false }} // Change to false for production
              />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
