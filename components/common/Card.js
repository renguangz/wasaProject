import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.cardContainer}>
                <Text>Card</Text>
            </View>
        </TouchableOpacity>
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