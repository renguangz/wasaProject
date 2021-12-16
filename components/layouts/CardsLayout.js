import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import Card from "../common/Card";
import { connect } from 'react-redux';
import { fetchClothes } from "../redux/clothes/clothesActions";
import { handlePressProduct } from "../redux";

const CardsLayout = ({ title, onPressCard, clothes, fetchClothes, handlePressProduct }) => {
    useEffect(() => {
        fetchClothes()
    }, [])

    const [productDetail, setProductDetail] = useState();
    const handlePress = (item) => {
        onPressCard();
        setProductDetail(item) // 取得點擊的資訊
    }
    useEffect(() => {
        handlePressProduct(productDetail)
    }, [productDetail])

    return (
        <View style={styles.blockContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={clothes}
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
        handlePressProduct: (data) => dispatch(handlePressProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsLayout);