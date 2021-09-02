import React from 'react';
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import { StyleSheet, View, Text } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>

            </View>
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
    content: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default SettingsScreen;