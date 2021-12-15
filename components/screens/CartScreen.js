import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const CartScreen = () => {
    useEffect(() => {
        fetch('https://mocki.io/v1/7bd68275-cdf1-4e5b-b2bc-6ff023df1ed1')
            .then(res => res.json()).then(data => {
                console.log(data)
            })
    }, [])
    return (
        <View>
            <Text>帳戶</Text>
        </View>
    )
};

export default CartScreen;