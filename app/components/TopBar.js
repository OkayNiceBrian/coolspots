import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

const androidHeight = 24;
const iosHeight = 45;

function TopBar(props) {
    return (
        <View style={styles.topBar} />
    );
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#637c98',
        width: '100%',
        height: Platform.OS == 'android' ? androidHeight : iosHeight,
    },
})

export default TopBar;