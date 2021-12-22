import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardListCard from '../components/CartListCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import {  getProduct, updateClothes } from '../redux';

const CartScreen = ({ navigation, clothes,updateClothes, getProduct }) => {
    const cartData = clothes.filter(item => item.like)

    const handlePress = item => {
        navigation.navigate('ProductDetail')
        getProduct(item)
    }

    const renderHiddenItem = (data, rowMap) => {
        return (
            <View style={styles.rowBack}>
                <TouchableOpacity
                    style={styles.backRightBtn}
                    onPress={() => updateClothes(data.item.key, !data.item.like)}
                >
                    <Text style={styles.deleteBtnText}>移除</Text>
                </TouchableOpacity>
            </View>
        )
    };


    if (!clothes) {
        return null
    }
    return (
        // Warning came out because of SwipeListView get changed
        <SwipeListView
            showsVerticalScrollIndicator={false}
            data={cartData}
            renderItem={(data, row) => (
                <CardListCard
                    sellerName={data.item.seller.name}
                    productTitle={data.item.imageTitle}
                    price={data.item.cost}
                    imageUri={data.item.imageUri}
                    onPressCard={() => handlePress(data.item)}
                />
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-80}
        />
    )
};

const styles = StyleSheet.create({
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    backRightBtn: {
        backgroundColor: '#FF0000',
        width: 80,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const mapStateToProps = state => {
    return {
        clothes: state.clothes.clothes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateClothes: (key, data) => dispatch(updateClothes(key, data)),
        getProduct: (data) => dispatch(getProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);