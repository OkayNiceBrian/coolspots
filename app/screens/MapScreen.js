import React, { useState } from 'react';
import Spot from '../models/Spot';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { apiUrl } from '../../global';

function MapScreen(props) {
    const spotList = fetchAllSpots();
    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true} 
            >
            </MapView>
        </View>
    );
}

async function fetchAllSpots() {
    const spotsUrl = apiUrl + "/spots";
    const spotList = [];
    
    const data = await fetch(spotsUrl)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data._embedded.spots.length; i++) {
                const spotData = data._embedded.spots[i];
                spotList[i] = spotData;
            }
        });
    console.log(spotList);
    return spotList;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    map: {
        flex: 1,
        width: '100%',
    },
})

export default MapScreen;