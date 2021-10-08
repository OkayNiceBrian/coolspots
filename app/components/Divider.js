import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

const height = 24;

function TopBar(props) {
    return (
        <View style={styles.divider} />
    );
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#637c98',
        width: '100%',
        height: height,
    },
})

export default TopBar;