import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MySpotsScreen from './MySpotsScreen';
import SettingsScreen from './SettingsScreen';
import SpotViewScreen from './SpotViewScreen';
import NewSpotScreen from './NewSpotScreen';

const Stack = createNativeStackNavigator();

function HomeStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeStack'
                component={HomeScreen}
                options={{ headerShown: false,}}
            />
            <Stack.Screen 
                name='MySpotsStack'
                component={MySpotsScreen}
                options={{ title: "My Saved Spots" }}
            />
            <Stack.Screen 
                name ='NewSpotStack'
                component={NewSpotScreen}
                options={{ title: "New Spot" }}
            />
            <Stack.Screen 
                name='SettingsStack'
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
            <Stack.Screen 
                name='SpotViewStack'
                component={SpotViewScreen}
                options={({ route }) => ({ title: route.params.spotModel.name })}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;