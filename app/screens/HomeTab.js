import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import HomeStack from './HomeStack';
import MapScreen from './MapScreen';

const Tab = createBottomTabNavigator();

const HomeTab = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconSize = 25;

                    if (route.name === 'HomeTab') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'MapTab') {
                        iconName = focused ? 'navigate' : 'navigate-outline';
                    }

                    return <Ionicons name={iconName} size={iconSize} color={'black'} />
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                
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

export default HomeTab;