import React from 'react';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
                <View style={styles.menu}>
                    <TouchableHighlight onPress={() => onPressMySpots()}>
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>My Spots</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => onPressSettings()}>
                        <View style={styles.menuOption}>
                            <Text>Settings</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <BottomBar />
        </View>
    );
}

function onPressMySpots() {
    console.log("My Spots pressed.")
}

function onPressSettings() {
    console.log("Settings pressed.")
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    menu: {
        flex: 1,
        width: '100%',
        padding: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuOption: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    menuText: {
        color: '#000',
    },
})

export default HomeScreen;