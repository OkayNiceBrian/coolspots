//import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import { StyleSheet, View, Image, Text, TouchableHighlight, TextInput, } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View
            style={styles.background}
        >
            <TopBar />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/favicon.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>CoolSpots</Text>
            </View>
            <TouchableHighlight
                style={{ width: "100%" }}
                onPress={() => onPressEnter()}
            >
                <View style={styles.loginButton}>
                    <Text style={styles.buttonText}>Start</Text>
                </View>
            </TouchableHighlight>
            {/* <TouchableHighlight 
                style={{width: "100%"}} 
                onPress={() => onPressEnter()}
            >  
                <View style={styles.registerButton}>
                    <Text style={styles.buttonText}>Start</Text>
                </View>
            </TouchableHighlight> */}
        </View>
    );

    function onPressEnter() {
        console.log("Enter Button Pressed");
        navigation.navigate("Home");
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#b5d9fe',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#637c98',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        flex: 1,
        top: 70,
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#7a52aa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagline: {
        fontSize: 40,
        fontStyle: 'italic',
        color: '#fff',
        top: 20,
    },
});

export default WelcomeScreen;