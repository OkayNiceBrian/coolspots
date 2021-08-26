import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faSearch, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, View } from 'react-native';

function BottomBar(props) {
    return (
        <View style={styles.bottomBar}>
            <FontAwesomeIcon 
                icon={faHome} 
                size={36}
                color={'white'}
            />
            <FontAwesomeIcon 
                icon={faSearch} 
                size={30}
                color={'white'}
            />
            <FontAwesomeIcon 
                icon={faMapMarkedAlt} 
                size={35}
                color={'white'}
            />
        </View>     
    );
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