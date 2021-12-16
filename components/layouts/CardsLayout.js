import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Card from "../common/Card";

const CardsLayout = ({ title, onPressCard }) => {
    return (
        <View style={styles.blockContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <ScrollView
                style={styles.cardContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}>
                <Card onPress={onPressCard} />
                <Card onPress={onPressCard} />
                <Card onPress={onPressCard} />
                <Card onPress={onPressCard} />
                <Card onPress={onPressCard} />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    blockContainer: {
        backgroundColor: 'white',
        height: 264,
        paddingLeft: 4,
        marginBottom: 12,
    },
    titleContainer: {
        height: 44,
        justifyContent: 'center',
        marginLeft: 4,
    },
    title: {
        fontSize: 20,
    },
    cardContainer: {
        flexDirection: 'row',
    },
});

export default CardsLayout;