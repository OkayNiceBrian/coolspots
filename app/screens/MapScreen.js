import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, ActivityIndicator, Platform } from 'react-native';
import { apiUrl } from '../../global';
import { Spot } from '../models/Spot';

const MapScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [spotList, setData] = useState([]);

    // Asynchronously gets a list of all spots from the api
    const getSpots = async () => {
        try {
            const spotsUrl = apiUrl + "/spots";
            const response = await fetch(spotsUrl);
            const json = await response.json();
            setData(json._embedded.spots);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    // Automatically called asynchronously to get the spots
    useEffect(() => {
        getSpots();
    }, []);

    // Returns all the spots as marker components
    const spotMarkers = () => {
        return spotList.map((spot, index) => (
            <Marker 
                key={index}
                coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
                title={spot.name}
                description={spot.description}
                onCalloutPress={() => pressCallout(spot)}
            />
        ))
    }

    return (
        <View style={styles.container}>
            <MapView 
                //provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true} 
            >
                { spotMarkers() }
            </MapView>
        </View>
    );

    function pressCallout(spotData) {
        console.log("Callout Pressed");
        let spotModel = new Spot(
            spotData.id,
            spotData.name,
            spotData.description,
            spotData.tags,
            spotData.city,
            spotData.latitude,
            spotData.longitude,
            spotData.visible,
            spotData.userId
            );
        navigation.navigate("SpotViewStack", { spotModel });
    }
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