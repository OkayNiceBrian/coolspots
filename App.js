// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MapScreen from './app/screens/MapScreen';

export default function App() {
  console.log("App Executing");

  return (
    <MapScreen />
  );
}
