import React, { useState } from "react";
import { TouchableWithoutFeedback, SafeAreaView, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { connect } from 'react-redux';
import { Colors } from "../constants/colors";
import { updateClothes } from "../redux";
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetailScreen = ({ navigation, productDetail, updateClothes }) => {
    const [isLiked, setIsLiked] = useState(productDetail && productDetail.like);
    const handlePressCart = (item) => {
        updateClothes(productDetail.key, item)
        setIsLiked(!isLiked)
    }

    if (!productDetail) {
        return null
    }
    return (
        <View style={{ backgroundColor: '#EFEFEF', flex: 1 }}>
            <View style={styles.imageBackgroundContainer}>
                <ImageBackground
                    source={{ uri: productDetail.imageUri }}
                    style={{ flex: 1 }}
                >
                    <TouchableWithoutFeedback
                        onPress={() => navigation.pop()}
                    >
                        <SafeAreaView>
                            <Icon
                                name={'arrow-back-circle'}
                                // name="arrow-back-circle-outline"
                                brand
                                style={{ fontSize: 52, color: 'steelblue', marginLeft: 12 }}
                            />
                        </SafeAreaView>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.descriptionTitleContainer}>
                    <Text
                        style={styles.descriptionTitle}
                        numberOfLines={2}
                    >{productDetail.imageTitle}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${productDetail.cost}</Text>
                </View>
                <View style={styles.commentContainer}>
                    <Text style={{ color: Colors.secondaryFont }}>尚無評價</Text>
                </View>
            </View>
            <View style={styles.sellerContainer}>
                <View style={styles.sellerInfoContainer}>
                    <Image
                        source={{ uri: productDetail && productDetail.seller && productDetail.seller.seller_image }}
                        style={styles.sellerPicture}
                    />
                    <View style={styles.sellerNameContainer}>
                        <Text style={styles.sellerName}>{productDetail && productDetail.seller && productDetail.seller.name}</Text>
                        <Text style={styles.sellerTime}>1小時前上線</Text>
                    </View>
                </View>
                <View style={styles.sellerInfo}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.sellerInfoText}>商品: </Text>
                        <Text style={{ ...styles.sellerInfoText, color: Colors.primaryFont }}>{productDetail && productDetail.seller && productDetail.seller.sell_quantity}</Text>
                    </View>
                    <Text style={styles.sellerInfoText}>|</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.sellerInfoText}>店家評價: </Text>
                        <Text style={{ ...styles.sellerInfoText, color: Colors.primaryFont }}>{productDetail && productDetail.seller && productDetail.seller.rates}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.pressButton} onPress={() => handlePressCart(!isLiked)}>
                    <Text style={styles.buttonText}>{isLiked ? '已加入購物車' : '加入購物車'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.pressButton, backgroundColor: Colors.primaryFont }}>
                    <Text style={styles.buttonText}>直接購買</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    imageBackgroundContainer: {
        // backgroundColor: 'orange',
        height: '50%',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        // resizeMode: 'cover',
    },
    descriptionContainer: {
        backgroundColor: 'white',
        height: '16%',
        paddingHorizontal: 12,
    },
    descriptionTitleContainer: {
        // backgroundColor: 'green',
        height: '40%',
        justifyContent: 'center',
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: '400',
    },
    priceContainer: {
        // backgroundColor: 'steelblue',
        height: '40%',
        justifyContent: 'center',
    },
    price: {
        fontSize: 24,
        color: Colors.primaryFont
    },
    commentContainer: {
        // backgroundColor: 'yellow',
        height: '20%',
        justifyContent: 'center',
    },
    sellerContainer: {
        backgroundColor: 'white',
        height: '22%',
        marginTop: 16,
        paddingHorizontal: 12,
    },
    sellerInfoContainer: {
        // backgroundColor: 'pink',
        marginHorizontal: 60,
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
    sellerPicture: {
        // backgroundColor: 'grey',
        height: 88,
        width: 88,
        borderRadius: 88,
        borderWidth: 4,
        borderColor: Colors.cardsColor,
    },
    sellerNameContainer: {
        // backgroundColor: 'green',
        flex: 1,
        marginLeft: 16,
    },
    sellerName: {
        fontSize: 20,
        marginBottom: 8,
    },
    sellerTime: {
        fontSize: 16,
        color: Colors.secondaryFont
    },
    sellerInfo: {
        // backgroundColor: 'orange',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    sellerInfoText: {
        fontSize: 22,
        color: Colors.secondaryFont,
    },
    actionContainer: {
        // backgroundColor: 'steelblue',
        height: '9%',
        marginTop: 16,
        flexDirection: 'row',
    },
    pressButton: {
        backgroundColor: 'green',
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }
});

const mapStateToProps = state => {
    return {
        productDetail: state.productDetail.info
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateClothes: (key, data) => dispatch(updateClothes(key, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen);