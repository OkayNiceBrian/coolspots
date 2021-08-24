// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, ImageBackground} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log("App Executing");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/laura-vinck-unsplash.jpg')} style={styles.container}>
        <View style={styles.login}>
          <View style={{
              backgroundColor: "dodgerblue",
              height: 100,
              width: 100,
            }} />
            <View style={{
              backgroundColor: "gold",
              height: 100,
              width: 100,
              top: 20,
            }} />
            <View style={{
              backgroundColor: "tomato",
              height: 100,
              width: 100,
            }} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'baseline',
    alignContent: "center",
  },
});
