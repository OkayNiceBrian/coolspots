import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faSearch, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomBar = ({ navigation }) => {
    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity 
                onPress={() => {pressHome()}} 
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            >
                <FontAwesomeIcon 
                    icon={faHome} 
                    size={36}
                    color={'white'}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {pressSearch()}} 
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            >
                <FontAwesomeIcon 
                    icon={faSearch} 
                    size={30}
                    color={'white'}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {pressMap()}} 
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            >
                <FontAwesomeIcon 
                    icon={faMapMarkedAlt} 
                    size={35}
                    color={'white'}
                />
            </TouchableOpacity>
        </View>     
    );  

    function pressHome() {
        console.log("Home Button Pressed.");
    }
    
    function pressSearch() {
        console.log("Search Button Pressed.");
    }
    
    function pressMap() {
        console.log("Map Button Pressed.");
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: '#637c98',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})

export default BottomBar;