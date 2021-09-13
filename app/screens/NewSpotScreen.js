import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { View, StyleSheet, TextInput, Text, TouchableHighlight, Switch } from 'react-native';

function NewSpotScreen(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [curTag, setCurTag] = useState("");
    const [city, setCity] = useState("");
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [visible, setVisible] = useState(true);

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
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
                        style={[styles.inputText, {paddingTop: 20}]}
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
                    <Text style={styles.fieldText}>Latitude</Text>
                    <TextInput 
                        style={styles.inputText}
                        placeholder="Latitude"
                        maxLength={9}
                        onChangeText={setLatitude}
                        value={latitude}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.fieldText}>Longitude</Text>
                    <TextInput 
                        style={styles.inputText}
                        placeholder="Longitude"
                        maxLength={9}
                        onChangeText={setLongitude}
                        value={longitude}
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

    function pressSubmit() {
        console.log("Submit Pressed");
    }

    function renderTags() {
        return tags.map((tag, index) => {
            let str = "#" + tag;
            return <Text style={styles.tagText} key={index}>{str}</Text>
        });
    }

    function addTag() {
        tags.push(curTag);
        console.log(tags[tags.length - 1] + " was added to Tags");
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