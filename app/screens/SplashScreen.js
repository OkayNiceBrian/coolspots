import React from 'react';
import TopBar from '../components/TopBar';
import { StyleSheet, View, Text, Image } from 'react-native';

function SplashScreen(props) {
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
    logo: {
        width: 100,
        height: 100,  
    },
    logoContainer: {
        flex: 1,
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 40,
        fontStyle: 'italic',
        color: '#fff',
        top: 20,
    },
})

export default SplashScreen;