//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, View, Image, Text, TouchableHighlight, } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/laura-vinck-unsplash.jpg')}
        >
            <StatusBar barStyle='light-content'/>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/favicon.png')} 
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Gifts That Keep On Giving</Text>
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
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,  
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagline: {
        fontSize: 24,
        color: '#fff',
        top: 20,
    },
});

export default WelcomeScreen;