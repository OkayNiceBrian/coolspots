import React from 'react';
import TopBar from '../components/TopBar';
import MapScreen from './MapScreen';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.brand}>
                <Text style={styles.brandText}>CoolSpots</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.menu}>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => onPressMySpots()}
                    >
                        <View style={[styles.menuOption, {borderTopWidth: 2}]}>
                            <Text style={styles.menuText}>My Spots</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => onPressNewSpot()}
                    >
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>Create New Spot</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => onPressSettings()}
                    >
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>Settings</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );

    function onPressMySpots() {
        console.log("My Spots Pressed");
        navigation.navigate('MySpotsStack');
    }

    function onPressNewSpot() {
        console.log("New Spot Pressed");
        navigation.navigate('NewSpotStack');
    }
    
    function onPressSettings() {
        console.log("Settings Pressed");
        navigation.navigate('SettingsStack');
    }
}

const styles = StyleSheet.create({
    brand: {
        width: '100%',
        height: 200,
        backgroundColor: '#b5d9fe',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    brandText: {
        color: '#fff',
        fontSize: 40,
        fontStyle: 'italic',
    },
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuOption: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
        borderBottomWidth: 2,
        borderColor: '#d4d4d4',
    },
    menuText: {
        color: '#000',
        fontSize: 18,
    },
})

export default HomeScreen;