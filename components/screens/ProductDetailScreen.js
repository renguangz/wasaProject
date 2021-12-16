import React from "react";
import { TouchableWithoutFeedback, SafeAreaView, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Colors } from "../constants/colors";

const ProductDetailScreen = ({ navigation, productDetail }) => {
    if (!productDetail) {
        return null
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#EFEFEF', flex: 1 }}>
            <View style={styles.imageBackgroundContainer}>
                <ImageBackground
                    source={{ uri: productDetail.imageUri }}
                    style={styles.imageBackground}
                >
                    <TouchableWithoutFeedback
                        onPress={() => navigation.pop()}
                    >
                        <Text style={{ color: 'steelblue' }}>返回</Text>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.descriptionTitleContainer}>
                    <Text style={styles.descriptionTitle}>{productDetail.imageTitle}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${productDetail.cost}</Text>
                </View>
                <View style={styles.commentContainer}>
                    <Text>尚無評價</Text>
                </View>
            </View>
            <View style={styles.sellerContainer}>
                <View style={styles.sellerInfoContainer}>
                    <View style={styles.sellerPicture}></View>
                    <View style={styles.sellerNameContainer}>
                        <Text style={styles.sellerName}>{productDetail.seller.name}</Text>
                        <Text style={styles.sellerTime}>1小時前上線</Text>
                    </View>
                </View>
                <View style={styles.sellerInfo}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.sellerInfoText}>商品: </Text>
                        <Text style={{ ...styles.sellerInfoText, color: Colors.primaryFont }}>{productDetail.seller.sell_quantity}</Text>
                    </View>
                    <Text style={styles.sellerInfoText}>|</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.sellerInfoText}>店家評價: </Text>
                        <Text style={{ ...styles.sellerInfoText, color: Colors.primaryFont }}>{productDetail.seller.rates}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.pressButton}>
                    <Text style={styles.buttonText}>{productDetail ? '已加入購物車' : '加入購物車'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.pressButton, backgroundColor: Colors.primaryFont}}>
                    <Text style={styles.buttonText}>直接購買</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    imageBackgroundContainer: {
        // backgroundColor: 'orange',
        height: '50%',
    },
    imageBackground: {
        // height: '50%',
        flex: 1,
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
        fontWeight: '300',
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
        backgroundColor: 'grey',
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
        height: '8%',
        marginTop: 16,
        flexDirection: 'row',
        paddingHorizontal: 12,
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

export default connect(mapStateToProps,)(ProductDetailScreen);