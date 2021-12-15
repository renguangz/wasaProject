import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CardsLayout from "../layouts/CardsLayout";

const AllClothesScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.screenTitleContainer}>
                <Text style={styles.screenTitle}>所有商品</Text>
            </View>
            <CardsLayout title='熱門商品' />
            <CardsLayout title='限時優惠' />
            <CardsLayout title='免運商品' />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFEF',
        flex: 1,
    },
    screenTitleContainer: {
        // backgroundColor: 'steelblue',
        height: 28,
        justifyContent: 'center',
        paddingLeft: 8,
    },
    screenTitle: {
        color: '#202125',
        fontSize: 20,
        fontWeight: '500',
    }
})

export default AllClothesScreen;