import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MapStack from './MapStack';

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

                    return <Ionicons name={iconName} size={iconSize} color={'white'} />
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#637c98' },
            })} 
        >
            <Tab.Screen 
                name='HomeTab'
                component={HomeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name='MapTab'
                component={MapStack}
                options={{ headerShown: false, unmountOnBlur: true }}
            />
        </Tab.Navigator>
    );
}

export default HomeTab;