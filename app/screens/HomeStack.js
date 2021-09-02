import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MySpotsScreen from './MySpotsScreen';
import SettingsScreen from './SettingsScreen';
import SpotViewScreen from './SpotViewScreen';

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
            />
            <Stack.Screen 
                name='SettingsStack'
                component={SettingsScreen}
            />
            <Stack.Screen 
                name='SpotViewStack'
                component={SpotViewScreen}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;