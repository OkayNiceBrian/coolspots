// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, ImageBackground} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log("App Executing");

  return (
    <ImageBackground source={require('./assets/laura-vinck-unsplash.jpg')} resizeMode="cover" style={styles.background}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}> 
        <View style={{
          color: "#fff",
          height: 100,
          width: 100,
        }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
