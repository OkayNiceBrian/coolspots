import React from 'react';
import TopBar from '../components/TopBar';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

function SpotViewScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text>IMAGES</Text>
            </View>
            <TopBar />
            <View style={styles.content}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>This is a spot. It is great. I love how great it is. 
                        Nothing better. If only I could have more of it.</Text>
                </View>
                <View style={styles.tagsContainer}>
                    <Text style={styles.tagsText}>#Skate Spot #Private #Great View</Text>
                </View>
                <View style={styles.tagsContainer}>
                    <Text style={styles.tagsText}>Olympia, WA</Text>
                </View>
                <View style={styles.menu}>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => PressViewLocation()}
                    >
                        <View style={[styles.menuOption, {borderTopWidth: 2}]}>
                            <Text style={styles.menuText}>View Location</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => PressOpenInMaps()}
                    >
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>Open in Maps -{'>'}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => PressReportSpot()}
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

function PressViewLocation() {
    console.log("View Location Pressed");
}

function PressOpenInMaps() {
    console.log("Open In Maps Pressed");
}

function PressReportSpot() {
    console.log("Report Spot Pressed");
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        paddingBottom: 10,
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
        borderBottomWidth: 2,
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
        padding: 20,
        paddingTop: 0,
        paddingBottom: 10,
    },
    tagsText: {
        fontSize: 12,
        color: '#000',
    },
});

export default SpotViewScreen;