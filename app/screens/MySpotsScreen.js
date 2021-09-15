import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { TouchableHighlight, StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { apiUrl } from '../../global';
import { Spot } from '../models/Spot';
import { useIsFocused } from '@react-navigation/native';

const MySpotsScreen = ({ navigation }) => {
    const [isLocalLoading, setLocalLoading] = useState(true);
    const [isApiLoading, setApiLoading] = useState(false);
    const [mySpotIds, setMySpotIds] = useState([]);
    const [mySpots, setMySpots] = useState([]);

    // Get MySpot ids from local storage
    async function getMySpotIds() {
        let spots = await SecureStore.getItemAsync("mySpots");
        if (spots) {
            console.log(spots);
            setMySpotIds(JSON.parse(spots));
            setLocalLoading(false);
            setApiLoading(true);
            console.log("MySpotIds retrieved successfully!")
        } else {
            console.log("MySpotIds NOT retrieved successfully");
        }
    }

    async function getMySpotsFromApi(abortController) {
        // Create local list of spotIds, make sure format is good
        let spotIdList = [];
        for (let c of mySpotIds) {
            if (c != ',') {
                spotIdList.push(c);
            }
        }

        // Try to fetch all the spots from the API with the spotIds
        let spotObjList = [];
        try {
            const spotUrl = apiUrl + "/spots";
            const response = await fetch(spotUrl, {signal: abortController.signal});
            const json = await response.json();
            const spotsArr = json._embedded.spots;
            // for each spot from the API
            for (let spot of spotsArr) {
                // And for each spotId from Local
                for (let spotId of spotIdList) {
                    // Push the mySpot objects to the screen
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
                            spot.imageUrls
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
        if (isLocalLoading) {
            getMySpotIds();
        }
        if (!isLocalLoading && isApiLoading){
            getMySpotsFromApi(abortController);
        }
    });

    // Re-runs this effect everytime the screen is refocused
    const isFocused = useIsFocused();
    useEffect(() => {
        setLocalLoading(true);
    }, [isFocused]);

    function renderMySpotOptions() {
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

        //return <Text>Loading...</Text>;
        return <ActivityIndicator style={styles.loading}/>;
    }

    return (
        <View style={styles.container}>
            <TopBar />
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.content}>
                    <View style={styles.menu}>
                        { renderMySpotOptions() }
                    </View>
                </View>
            </ScrollView>
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
    loading: {
        top: 20,
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