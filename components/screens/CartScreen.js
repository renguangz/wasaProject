import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

const CartScreen = ({navigation}) => {
    useEffect(() => {
        fetch('https://mocki.io/v1/7bd68275-cdf1-4e5b-b2bc-6ff023df1ed1')
            .then(res => res.json()).then(data => {
                console.log(data)
            })
    }, [])
    return (
        <View>
            <Button 
                title='navigate'
                onPress={() => navigation.navigate('ProductDetail')}
            />
            <Text>帳戶</Text>
        </View>
    )
};

export default CartScreen;