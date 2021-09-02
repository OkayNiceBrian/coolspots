import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

function TopBar(props) {
    return (
        <View style={styles.topBar} />
    );
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#637c98',
        width: '100%',
        height: Platform.OS == 'android' ? 24 : 45,
    },
})

export default TopBar;