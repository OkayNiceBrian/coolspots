import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, StyleSheet, Text, TouchableHighlight, ScrollView, Platform, Linking } from 'react-native';

const SpotViewScreen = ({ navigation, route }) => {
    // The Spot Model with all spot data passed from the previous screen
    const spotModel = route.params.spotModel;

    const[isLocalLoading, setLocalLoading] = useState(true);
    const[isCloudLoading, setCloudLoading] = useState(true);
    const[mySpotIds, setMySpotIds] = useState([]);
    const[saveMySpots, setSaveMySpots] = useState(false);

    // Get MySpot ids from local storage
    async function getMySpotIds() {
        let spots = await SecureStore.getItemAsync("mySpots");
        if (spots) {
            console.log(spots);
            setMySpotIds(JSON.parse(spots));
            setLocalLoading(false);
            console.log("MySpotIds retrieved successfully!")
        } else {
            console.log("MySpotIds NOT retrieved successfully");
            setLocalLoading(false);
        }
    }

    async function saveMySpotIds() {
        try {
            await SecureStore.setItemAsync("mySpots", JSON.stringify(mySpotIds));
            setSaveMySpots(false);
            // Check if you need to refresh MySpotsScreen spotIds
            if (route.params.hasOwnProperty('onGoBack')){
                route.params.onGoBack(mySpotIds);
            }
            console.log("mySpotIds saved successfully!");
        } catch (err) {
            console.error(err);
        } 
    }

    useEffect(() => {
        if (isLocalLoading) {
            getMySpotIds();
        }
        if (saveMySpots) {
            saveMySpotIds();
        }
    });

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.imageContainer}>
                    { isCloudLoading ? <Text>Loading...</Text> : <Text>No Images</Text> }
                </View>
                <View style={styles.content}>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{spotModel.description}</Text>
                    </View>
                    <View style={styles.tagsContainer}>
                        {renderTags()}
                    </View>
                    <View style={styles.tagsContainer}>
                        <Text style={styles.tagsText}>{spotModel.city}</Text>
                    </View>
                    <View style={styles.menu}>
                        <TouchableHighlight 
                            style={{ width: '100%' }}
                            onPress={() => PressViewLocation()}
                        >
                            <View style={[styles.menuOption, {borderTopWidth: 2}]}>
                                <Text style={styles.menuText}>View Location</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={{ width: '100%' }}
                            onPress={() => PressOpenInMaps()}
                        >
                            <View style={styles.menuOption}>
                                <Text style={styles.menuText}>Open in { Platform.OS === 'ios' ? "Apple" : "Google" } Maps</Text>
                            </View>
                        </TouchableHighlight>
                        { renderAddOrRemove() }
                        {/* <TouchableHighlight 
                            style={{ width: '100%' }}
                            onPress={() => PressReportSpot()}
                        >
                            <View style={styles.menuOption}>
                                <Text style={styles.menuText}>Report Spot</Text>
                            </View>
                        </TouchableHighlight> */}
                    </View>
                </View>
            </ScrollView>
        </View>

    );

    function pressRemoveFromMySpots() {
        console.log("Remove from mySpots Pressed");
        if (mySpotIds.includes(spotModel.id)){
            mySpotIds.splice(mySpotIds.indexOf(spotModel.id), 1);
            setSaveMySpots(true);
        }
    }
    
    function pressAddToMySpots() {
        console.log("Add to mySpots Pressed");
        if (!mySpotIds.includes(spotModel.id)){
            mySpotIds.push(spotModel.id);
            setSaveMySpots(true);
        }
    }

    function PressViewLocation() {
        console.log("View Location Pressed");
        navigation.navigate('MapViewStack', {
            spotModel,
        });
    }
    
    function PressOpenInMaps() {
        console.log("Open In Maps Pressed");
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${spotModel.latitude},${spotModel.longitude}`;
        const label = spotModel.name;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    }
    
    function PressReportSpot() {
        console.log("Report Spot Pressed");
    }

    function renderTags() {
        let tagString = "";
        for (let tag of spotModel.tags) {
            tagString += ("#" + tag + " ");
        }
        return (<Text style={styles.tagsText}>{tagString}</Text>);
    }

    function renderAddOrRemove() {
        if (!isLocalLoading) {
            if (mySpotIds.includes(spotModel.id)) {
                return (
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => pressRemoveFromMySpots()}
                    >
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>Remove from My Spots</Text>
                        </View>
                    </TouchableHighlight>
                );
            } else {
                return (
                    <TouchableHighlight 
                        style={{width: '100%'}}
                        onPress={() => pressAddToMySpots()}
                    >
                        <View style={styles.menuOption}>
                            <Text style={styles.menuText}>Add to My Spots</Text>
                        </View>
                    </TouchableHighlight>
                )
            }
        }
        return null;
    }
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
        alignItems: 'flex-start',
        padding: 20,
        paddingBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
    },
    imageContainer: {
        width: '100%',
        height: 250,
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