//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, View, Image, Text } from 'react-native';

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
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
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
    },
    tagline: {
        fontSize: 24,
        fontFamily: 'Arial',
        color: '#fff',
        top: 20,
    },
})

export default WelcomeScreen;