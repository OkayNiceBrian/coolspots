import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const MySpotsScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [mySpotIds, setMySpotIds] = useState([]);
    const [mySpots, setMySpots] = useState([]);

    async function saveSpotToMySpots(spotId) {
        await SecureStore.setItemAsync("mySpots", [spotId].toString());
    }

    async function getMySpotIds() {
        let spots = await SecureStore.getItemAsync("mySpots");
        if (spots) {
            setMySpotIds(spots);
            console.log("MySpots retrieved successfully");
            setLoading(false);
        } else {
            console.log("MySpots NOT retrieved successfully");
        }
    }

    async function getMySpotsFromApi() {
        let spotIdList = [];
    }

    useEffect(() => {
        saveSpotToMySpots([3, 4]);
        getMySpotIds();
    }, []);

    if (!isLoading) {
        console.log(mySpotIds);
    }

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
                <View style={styles.menu}>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => pressSpot()}
                    >
                        <View style={[styles.menuOption, {borderTopWidth: 2}]}>
                            <Text style={styles.menuText}>Sample Spot</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );

    function pressSpot() {
        console.log("Spot Pressed");
        navigation.navigate('SpotViewStack');
    }
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

export default MySpotsScreen;