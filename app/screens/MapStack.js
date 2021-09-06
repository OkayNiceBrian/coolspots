import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './MapScreen';
import SpotViewScreen from './SpotViewScreen';

const Stack = createNativeStackNavigator();

function MapStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={"MapStack"}
                component={MapScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={"SpotViewStack"}
                component={SpotViewScreen}
            />
        </Stack.Navigator>
    );
}

export default MapStack;