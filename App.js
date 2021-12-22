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
import MainScreen from './src/screens/MainScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name='ProductDetail' component={ProductDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
