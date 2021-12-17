import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { Colors } from '../constants/colors';

const CardListCard = ({ onPressCard, sellerName, productTitle, price, imageUri }) => {
    return (
        <TouchableWithoutFeedback onPress={onPressCard}>
            <View style={styles.container}>
                <View style={styles.productInfoContainer}>
                    <Text style={{ color: Colors.secondaryFont }}>賣家: {sellerName}</Text>
                    <Text style={styles.productText}>{productTitle}</Text>
                    <Text style={{ ...styles.productText, color: Colors.primaryFont }}>{price}</Text>
                    <Text style={{ color: Colors.secondaryFont }}>尚無評價</Text>
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