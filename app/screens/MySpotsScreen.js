import React, { useState, useEffect } from 'react';
import Divider from '../components/Divider';
import { TouchableHighlight, StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { apiUrl } from '../../global';
import { Spot } from '../models/Spot';
import { useIsFocused } from '@react-navigation/native';

const MySpotsScreen = ({ navigation }) => {
    const [isLocalLoading, setLocalLoading] = useState(true);
    const [isApiLoading, setApiLoading] = useState(false);
    const [isDeterminingSpots, setDeterminingSpots] = useState(true);
    const [mySpotIds, setMySpotIds] = useState([]);
    const [mySpots, setMySpots] = useState([]);
    const [spotObjList, setSpotObjList] = useState([])

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
            setLocalLoading(false);
        }
    }

    async function getMySpotsFromApi(abortController) {
        // Try to fetch all the spots from the API with the spotIds
        try {
            const spotUrl = apiUrl + "/spots";
            const response = await fetch(spotUrl, {signal: abortController.signal});
            const json = await response.json();
            setSpotObjList(json._embedded.spots);
            determineMySpots();
        } catch (err) {
            console.error(err);
        } finally {
            setApiLoading(false);
        }
    }

    function determineMySpots() {
        let mySpotObjList = []
        // for each spot from the API
        for (let spot of spotObjList) {
            // And for each spotId from Local
            for (let spotId of mySpotIds) {
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
                    mySpotObjList.push(newSpot)
                    break;
                }
            }
        }
        setMySpots(mySpotObjList);
        setDeterminingSpots(false);
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
        determineMySpots();
    }, [isFocused]);

    function renderMySpotOptions() {
        if (!isDeterminingSpots) {
            return mySpots.map((spot, index) => (
                <TouchableHighlight 
                    key={index}
                    style={{width: '100%'}}
                    onPress={() => pressSpot(spot)}
                >
                    <View style={[styles.menuOption]}>
                        <Text style={styles.menuText}>{spot.name}</Text>
                    </View>
                </TouchableHighlight>
            ))
        }
        return <ActivityIndicator style={styles.loading}/>;
    }

    return (
        <View style={styles.container}>
            <Divider />
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
        navigation.navigate('SpotViewStack', { 
            spotModel,
            onGoBack: (spotIds) => setMySpotIds(spotIds),
        });
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