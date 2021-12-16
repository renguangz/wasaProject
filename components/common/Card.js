import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Card = ({ onPress, uri, productTitle, price }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={{ flex: 1 }}
                        source={{ uri: uri }}
                    />
                </View>
                <View style={styles.productInfoContainer}>
                    <Text>{productTitle}</Text>
                    <Text>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        // backgroundColor: 'green',
        borderColor: '#F7F7F7',
        borderWidth: 2,
        height: 208,
        width: 160,
        marginHorizontal: 4,
    },
    imageContainer: {
        // backgroundColor: 'green',
        height: '80%',
    },
    productInfoContainer: {
        backgroundColor: '#F7F7F7',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default Card;