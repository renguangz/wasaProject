import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Header from '../components/Header';
import AllClothesScreen from './AllClothesScreen';
import BoyClothesScreen from './BoyClothesScreen';
import GirlClothesScreen from './GirlClothesScreen';
import { Colors } from '../constants/colors';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    const options = {
        headerTitle: () => <Header />,
        headerTitleContainerStyle: { width: '100%' },
        drawerActiveBackgroundColor: Colors.primaryFont,
        drawerActiveTintColor: "white",
    }
    return (
        <Drawer.Navigator
            screenOptions={{ headerTintColor: Colors.primaryFont }}
        >
            <Drawer.Screen
                name='All Clothes'
                component={AllClothesScreen}
                options={options}
            />
            <Drawer.Screen
                name='Boys Clothes'
                component={BoyClothesScreen}
                options={options}
            />
            <Drawer.Screen
                name='Girls Clothes'
                component={GirlClothesScreen}
                options={options}
            />
        </Drawer.Navigator>
    )
};

export default HomeScreen;