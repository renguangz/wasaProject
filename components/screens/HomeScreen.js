import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AllClothesScreen from './AllClothesScreen';
import BoyClothesScreen from './BoyClothesScreen';
import GirlClothesScreen from './GirlClothesScreen';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='All Clothes' component={AllClothesScreen} options={{ headerShown: false }} />
            <Drawer.Screen name='Boys Clothes' component={BoyClothesScreen} />
            <Drawer.Screen name='Girls Clothes' component={GirlClothesScreen} />
        </Drawer.Navigator>
    )
};

export default HomeScreen;