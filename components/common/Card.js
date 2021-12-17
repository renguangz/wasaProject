import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "../constants/colors";

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
                    <View style={styles.productInfoTitle}>
                        <Text numberOfLines={1} style={styles.productText}>{productTitle}</Text>
                    </View>
                    <Text style={{...styles.productText, color: Colors.primaryFont}}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        // backgroundColor: 'green',
        borderColor: Colors.cardsColor,
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
        backgroundColor: Colors.cardsColor,
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productInfoTitle: {
        // backgroundColor: 'yellow',
        flex: 1,
        paddingRight: 8,
    },
    productText: {
        fontSize: 16,
        fontWeight: '400',
    },
})

export default Card;