import React from 'react';
import BottomBar from '../components/BottomBar';
import { View, StyleSheet } from 'react-native';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <View>

            </View>
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
})

export default HomeScreen;