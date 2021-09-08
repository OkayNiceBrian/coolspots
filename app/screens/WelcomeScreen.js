//import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import { StyleSheet, View, Image, Text, TouchableHighlight, TextInput, } from 'react-native';
import { AuthContext } from '../../App';

const WelcomeScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

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
                <View style={styles.loginContainer}>
                    <TextInput 
                        style={styles.loginText}
                        placeholder="Email"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput 
                        style={styles.loginText}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
            </View>
            <TouchableHighlight 
                style={{width: "100%"}} 
                onPress={() => onPressLogin({ username, password })}
            >
                <View style={styles.loginButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
                style={{width: "100%"}} 
                onPress={() => onPressRegister({ username, password })}
            >  
                <View style={styles.registerButton}>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableHighlight>
        </View>
    );

    function onPressLogin(username, password) {
        console.log("Login Button Pressed");
        signIn({ username, password });
    }

    function onPressRegister(username, password) {
        console.log("Register Button Pressed");
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
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    loginText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#fff',
        margin: 10,
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