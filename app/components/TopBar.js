import React from 'react';
import { StyleSheet, View } from 'react-native';

function TopBar(props) {
    return (
        <View style={styles.topBar} />
    );
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#637c98',
        width: '100%',
        height: 24,
    },
})

export default TopBar;