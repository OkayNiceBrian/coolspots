import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { apiUrl } from '../../global';

function MapScreen(props) {
    const [isLoading, setLoading] = useState(true);
    const [spotList, setData] = useState([]);

    const getSpots = async () => {
        try {
            const spotsUrl = apiUrl + "/spots";
            const response = await fetch(spotsUrl);
            const json = await response.json();
            setData(json._embedded.spots);
        } catch (err) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSpots();
    }, []);

    const spotMarkers = () => {
        return spotList.map((spot, index) => (
            <Marker 
                key={index}
                coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
                title={spot.name}
                description={spot.description}
            />
        ))
    }

    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true} 
            >
                { spotMarkers() }
            </MapView>
        </View>
    );
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