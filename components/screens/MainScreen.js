import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='About' component={AboutScreen} />
        </Tab.Navigator>
    )
};

export default MainScreen;