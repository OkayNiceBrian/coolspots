import React from 'react';
import TopBar from '../components/TopBar';
import { View, StyleSheet, TextInput, Text } from 'react-native';

function NewSpotScreen(props) {
    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Spot Name</Text>
                    <TextInput style={styles.inputText}>hi</TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Description</Text>
                    <TextInput style={styles.inputText}>hi</TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Tags</Text>
                    <TextInput style={styles.inputText}>hi</TextInput>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161614",
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    inputContainer: {
        height: 40,
        width: '100%',
        backgroundColor: '#323232',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 30,
    },
    inputText: {
        color: '#fff',
        fontSize: 15,
        padding: 40,
    }
})

export default NewSpotScreen;