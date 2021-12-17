import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CartScreen from './CartScreen';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName='帳戶'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    } else if (route.name === '購物車') {
                        iconName = focused ? 'cart-sharp' : 'cart-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen name='購物車' component={CartScreen} />
        </Tab.Navigator>
    )
};

export default MainScreen;