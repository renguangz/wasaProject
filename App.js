/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from './components/screens/MainScreen';
import HomeScreen from './components/screens/HomeScreen';
import ProductDetailScreen from './components/screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
