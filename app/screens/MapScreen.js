import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

function MapScreen(props) {
    return (
        <View style={styles.container}>
            <MapView 
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
})

export default MapScreen;