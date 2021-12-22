import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "../components/Card";
import { connect } from 'react-redux';
import { fetchClothes, getProduct } from "../redux";

const CardsLayout = ({ title, onPressCard, fetchClothes, data, getProduct }) => {
    useEffect(() => {
        fetchClothes()
    }, [])

    const handlePress = (item) => {
        onPressCard();
        getProduct(item)
    }

    return (
        <View style={styles.blockContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => `key-${index}`}
                renderItem={({ item }) => (
                    <Card
                        onPress={() => handlePress(item)}
                        uri={item.imageUri}
                        productTitle={item.imageTitle}
                        price={item.cost}
                    />
                )}
            />
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

const mapStateToProps = state => {
    return {
        clothes: state.clothes.clothes,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchClothes: () => dispatch(fetchClothes()),
        getProduct: (data) => dispatch(getProduct(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsLayout);