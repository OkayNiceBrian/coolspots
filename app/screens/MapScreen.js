import React, { useState } from 'react';
import BottomBar from '../components/BottomBar';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

function MapScreen(props) {

    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true} 
            />
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
})

export default MapScreen;