import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = () => {
    return (
        <View style={styles.cardContainer}>
            <Text>Card</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        // backgroundColor: 'green',
        borderColor: 'steelblue',
        borderWidth: 2,
        borderRadius: 6,
        height: 208,
        width: 160,
        marginHorizontal: 4,
    }
})

export default Card;