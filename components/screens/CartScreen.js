import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardListCard from '../common/CartListCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { handlePressProduct, upDateClothes } from '../redux';

const CartScreen = ({ navigation, clothes, handlePressProduct, updateClothes }) => {
    const cartData = clothes.filter(item => item.like)

    const [productDetail, setProductDetail] = useState([]);
    const handlePress = item => {
        navigation.navigate('ProductDetail')
        setProductDetail(item);
    }

    useEffect(() => {
        handlePressProduct(productDetail)
    }, [productDetail])

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
        handlePressProduct: (data) => dispatch(handlePressProduct(data)),
        updateClothes: (key, data) => dispatch(upDateClothes(key, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);