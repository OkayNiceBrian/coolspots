import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { apiUrl } from '../../global';
import { View, StyleSheet, TextInput, Text, TouchableHighlight, Switch, Button, ScrollView, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as Location from 'expo-location';

function NewSpotScreen({ navigation }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [curTag, setCurTag] = useState("");
    const [city, setCity] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [visible, setVisible] = useState(true);
    const [addToMySpots, setAddToMySpots] = useState(true);

    const [isLocalLoading, setLocalLoading] = useState(true);
    const [mySpotIds, setMySpotIds] = useState([]);

    const [useCurrentLocation, setUseCurrentLocation] = useState(false);

    // get MySpot Ids from local storage
    async function getMySpotIds() {
        let spots = await SecureStore.getItemAsync("mySpots");
        if (spots) {
            console.log(spots);
            setMySpotIds(JSON.parse(spots));
            setLocalLoading(false);
            console.log("MySpotIds retrieved successfully!")
        } else {
            console.log("MySpotIds NOT retrieved successfully");
        }
    }

    // get the user's current location for lat and long values
    async function getCurrentLocation() {
        setUseCurrentLocation(false);
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log("User location permission denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        console.log(`Retrieved user location: lat: ${latitude} long: ${longitude}`);
    }

    // Automatically asynchronously calls functions
    useEffect(() => {
        if (isLocalLoading) {
            getMySpotIds();
        }
        if (useCurrentLocation) {
            getCurrentLocation();
        }
    });

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>Name</Text>
                        <TextInput 
                            style={styles.inputText}
                            placeholder="Name"
                            maxLength={30}
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
                    <View style={[styles.inputContainer, {paddingBottom: 10}]}>
                        <Text style={styles.fieldText}>Description</Text>
                        <TextInput 
                            style={[styles.inputText, {paddingTop: 0}]}
                            placeholder="Description"
                            multiline={true}
                            maxLength={300}
                            onChangeText={setDescription}
                            value={description}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>City</Text>
                        <TextInput 
                            style={styles.inputText}
                            placeholder="City"
                            maxLength={20}
                            onChangeText={setCity}
                            value={city}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>Location</Text>
                        <Button 
                            title="Use Current Location"
                            onPress={() => pressCurrentLocation()}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>Latitude</Text>
                        <TextInput 
                            style={styles.inputText}
                            placeholder="Latitude"
                            editable={false}
                            value={latitude.toString()}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>Longitude</Text>
                        <TextInput 
                            style={styles.inputText}
                            placeholder="Longitude"
                            editable={false}
                            value={longitude.toString()}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>Make Private?</Text>
                        <Switch 
                            style={styles.switch}
                            value={!visible}
                            onChange={() => setVisible(!visible)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>Add to My Spots?</Text>
                        <Switch 
                            style={styles.switch}
                            value={addToMySpots}
                            onChange={() => setAddToMySpots(!addToMySpots)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fieldText}>Tags</Text>
                        <TextInput 
                            style={styles.inputText}
                            autoCorrect={false}
                            returnKeyLabel={"Add Tag"}
                            placeholder="Tag"
                            maxLength={10}
                            onChangeText={setCurTag}
                            value={curTag}
                            onSubmitEditing={() => addTag()}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        {renderTags()}
                    </View>
                    
                    <View style={[styles.inputContainer, {flex: 1}]}>
                    </View>
                </ScrollView>
                <TouchableHighlight 
                    style={{width: "100%"}} 
                    onPress={() => pressSubmit()}
                >  
                    <View style={styles.submitButton}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );

    async function pressSubmit() {
        console.log("Submit Pressed");
        // Checks if all the fields have been filled, otherwise doesn't submit
        if (name != "" && description != "" && tags.length > 0 && city != "" && longitude && latitude) {
            const spotModel = {
                name: name,
                description: description,
                tags: tags,
                city: city,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                visible: visible,
                imageLinks: []
            }
            try {
                // Makes a POST request to send the spot to the api/database
                const spotUrl = apiUrl + "/spots";
                const response = await fetch(spotUrl, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(spotModel)
                });
                // If user wants the spot added to MySpots, attempts to store it there locally
                if (addToMySpots) {
                    const json = response.json().then(async (data) => {
                        console.log(data);
                        mySpotIds.push(data.id);
                        await SecureStore.setItemAsync("mySpots", JSON.stringify(mySpotIds));
                    });
                    console.log(mySpotIds);
                }
            } catch (err) {
                console.error(err);
            } finally {
                navigation.goBack();
            }
        } else {
            console.log("All spot fields must be filled.");
            Alert.alert(
                "Form Incomplete",
                "All fields must be filled to submit spot.",
                [
                    { text: "Ok", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }

    function pressCurrentLocation() {
        console.log("Use Current Location Pressed");
        setUseCurrentLocation(true);
    }

    function renderTags() {
        return tags.map((tag, index) => {
            let str = "#" + tag;
            return <Text style={styles.tagText} key={index}>{str}</Text>;
        });
    }

    function addTag() {
        curTag.trim();
        if (curTag != "") {
            tags.push(curTag);
            console.log(tags[tags.length - 1] + " was added to Tags");
        }
        setCurTag("");
    }
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 22,
        color: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    fieldText: {
        color: '#000',
        fontSize: 15,
        padding: 20,
        width: 150,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    inputText: {
        paddingLeft: 40,
        fontSize: 15,
        width: 200,
        height: 60,
        margin: 0,
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    submitButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#7a52aa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    switch: {
        top: 0,
        left: 35,
    },
    tagText: {
        color: 'blue',
        marginLeft: 10,
        padding: 5,
    },
})

export default NewSpotScreen;