import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AboutScreen from './AboutScreen';
import SettingScreen from './SettingScreen';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='About' component={AboutScreen} />
            <Drawer.Screen name='Setting' component={SettingScreen} />
        </Drawer.Navigator>
    )
};

export default HomeScreen;