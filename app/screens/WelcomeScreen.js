//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TopBar from '../components/TopBar';
import { ImageBackground, StyleSheet, StatusBar, View, Image, Text, TouchableHighlight, } from 'react-native';

function WelcomeScreen(props) {
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
                style={{width: "100%"}} 
                onPress={() => console.log("Login Pressed")}
            >
                <View style={styles.loginButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
                style={{width: "100%"}} 
                onPress={() => console.log("Register Pressed")}
            >  
                <View style={styles.registerButton}>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
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