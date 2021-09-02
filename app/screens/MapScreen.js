import React, { useState } from 'react';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

function MapScreen(props) {

    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true} 
            />
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