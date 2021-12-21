import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { Colors } from '../constants/colors';

const CardListCard = ({ onPressCard, sellerName, productTitle, price, imageUri }) => {
    return (
        <TouchableWithoutFeedback onPress={onPressCard}>
            <View style={styles.container}>
                <View style={styles.productInfoContainer}>
                    <Text numberOfLines={1} style={{ color: Colors.secondaryFont }}>賣家: {sellerName}</Text>
                    <Text numberOfLines={1} style={styles.productText}>{productTitle}</Text>
                    <Text numberOfLines={1} style={{ ...styles.productText, color: Colors.primaryFont }}>{price}</Text>
                    <Text numberOfLines={1} style={{ color: Colors.secondaryFont }}>尚無評價</Text>
                </View>
                <View style={styles.productImageContainer}>
                    <Image
                        resizeMode="cover"
                        style={{ width: 92, height: 92, borderRadius: 16, overflow: 'hidden' }}
                        source={{ uri: imageUri }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    productInfoContainer: {
        // backgroundColor: 'yellow',
        flex: 1,
        height: '100%',
        paddingVertical: 12,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    productText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#272821',
    },
    productImageContainer: {
        // backgroundColor: 'green',
    },
});

export default CardListCard;