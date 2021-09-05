import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { apiUrl } from '../../global';

function MapScreen(props) {
    const spotList = fetchAllSpots();
    const markerList = createMarkerList(spotList);
    return (
        <View style={styles.container}>
            <TopBar />
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
    return spotList;
}

function createMarkerList(spotList) {
    const markerList = [];
    for (let i = 0; i < spotList.length; i++) {
        let latlng = {
            latitude: spotList[i].latitude,
            longitude: spotList[i].longitude,
        };
        markerList.push(
            <Marker 
                key={spotList[i].id}
                coordinate={latlng}
                title={spotList[i].name}
                description={spotList[i].description}
            />
        );
    }
    console.log(markerList);
    return markerList;
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