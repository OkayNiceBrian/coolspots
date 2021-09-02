import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import HomeStack from './HomeStack';
import MapScreen from './MapScreen';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

            })} 
        >
            <Tab.Screen 
                name='HomeTab'
                component={HomeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name='MapTab'
                component={MapScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default Home;