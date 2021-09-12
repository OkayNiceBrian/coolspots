import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { TouchableHighlight, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { apiUrl } from '../../global';
import { Spot } from '../models/Spot';

const MySpotsScreen = ({ navigation }) => {
    const [isLocalLoading, setLocalLoading] = useState(true);
    const [isApiLoading, setApiLoading] = useState(true);
    const [mySpotIds, setMySpotIds] = useState([]);
    const [mySpots, setMySpots] = useState([]);

    async function saveSpotToMySpots(spotIds) {
        await SecureStore.setItemAsync("mySpots", spotIds.toString());
    }

    async function getMySpotIds() {
        let spots = await SecureStore.getItemAsync("mySpots");
        if (spots) {
            setMySpotIds(spots);
            setLocalLoading(false);
            console.log("MySpotIds retrieved successfully!")
        } else {
            console.log("MySpotIds NOT retrieved successfully");
        }
    }

    async function getMySpotsFromApi(abortController) {
        let spotIdList = [];
        for (let c of mySpotIds) {
            if (c != ',') {
                spotIdList.push(c);
            }
        }

        let spotObjList = [];
        try {
            const spotUrl = apiUrl + "/spots";
            const response = await fetch(spotUrl, {signal: abortController.signal});
            const json = await response.json();
            const spotsArr = json._embedded.spots;
            for (let spot of spotsArr) {
                for (let spotId of spotIdList) {
                    if (spot.id == spotId) {
                        const newSpot = new Spot(
                            spot.id,
                            spot.name,
                            spot.description,
                            spot.tags,
                            spot.city,
                            spot.latitude,
                            spot.longitude,
                            spot.visible,
                            spot.userId
                        );
                        spotObjList.push(newSpot)
                        break;
                    }
                }
            }
        } catch (err) {
            console.error(err);
        } finally {
            setMySpots(spotObjList);
            setApiLoading(false);
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        saveSpotToMySpots([3, 4]);
        if (isLocalLoading) {
            getMySpotIds();
        }
        if (!isLocalLoading && isApiLoading){
            getMySpotsFromApi(abortController);
        }
    });

    const renderMySpotOptions = () => {
        if (!isApiLoading) {
            return mySpots.map((spot, index) => (
                <TouchableHighlight 
                    key={index}
                    style={{width: '100%'}}
                    onPress={() => pressSpot(spot)}
                >
                    <View style={[styles.menuOption, {borderTopWidth: 2}]}>
                        <Text style={styles.menuText}>{spot.name}</Text>
                    </View>
                </TouchableHighlight>
            ))
        }

        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
                <View style={styles.menu}>
                    { renderMySpotOptions() }
                </View>
            </View>
        </View>
    );

    

    function pressSpot(spotModel) {
        console.log("Spot Pressed");
        navigation.navigate('SpotViewStack', { spotModel });
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