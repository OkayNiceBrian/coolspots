import React from 'react';
import TopBar from '../components/TopBar';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

function SpotViewScreen(props) {
    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.imageContainer}>
                <Text>IMAGES</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>THIS SPOT TITLE</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>This is a spot. It is great. I love how great it is. 
                        Nothing better. If only I could have more of it.</Text>
                </View>
                <View style={styles.tagsContainer}>
                    <Text style={styles.tagsText}>Skate Spot, Private, Great View</Text>
                </View>
                <View style={styles.menu}>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                    >
                        <View style={[styles.menuOption, {borderTopWidth: 3}]}>
                            <Text style={styles.menuText}>View Location</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                    >
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>Open in Maps -{'>'}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                    >
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>Report Spot</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#637c98',
    },
    content: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    descriptionContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 5,
    },
    descriptionText: {
        fontSize: 14,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
    },
    menu: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuOption: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
        borderBottomWidth: 3,
        borderColor: '#d4d4d4',
    },
    menuText: {
        color: '#000',
        fontSize: 18,
    },
    tagsContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 8,
    },
    tagsText: {
        fontSize: 12,
        color: '#fff',
    },
    titleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
    },
    titleText: {
        fontSize: 20
    }
});

export default SpotViewScreen;