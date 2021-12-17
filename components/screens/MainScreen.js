import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CartScreen from './CartScreen';
import HomeScreen from '../screens/HomeScreen';
import Header from '../common/Header';
import { DrawerActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
    return (
        <Tab.Navigator initialRouteName='帳戶'>
            <Tab.Screen name='Home'
                component={HomeScreen}
                options={{
                    headerTitle: () => <Header onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />,
                    headerTitleContainerStyle: { width: '100%' },
                }}
            />
            <Tab.Screen name='購物車' component={CartScreen} />
        </Tab.Navigator>
    )
};

export default MainScreen;