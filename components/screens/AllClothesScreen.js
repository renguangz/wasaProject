import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../constants/colors";
import CardsLayout from "../layouts/CardsLayout";

const cardLayoutTitles = ['熱門商品', '限時優惠', '免運商品']

const AllClothesScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.screenTitleContainer}>
                <Text style={styles.screenTitle}>所有商品</Text>
            </View>
            {
                cardLayoutTitles.map((item, index) => (
                    <CardsLayout
                        key={index}
                        title={item}
                        onPressCard={() => navigation.navigate('ProductDetail')}
                    />
                ))
            }
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
        color: Colors.primaryFont,
        fontSize: 20,
        fontWeight: '500',
    }
})

export default AllClothesScreen;