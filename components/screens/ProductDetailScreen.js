import React from "react";
import { TouchableWithoutFeedback, SafeAreaView, Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { connect } from 'react-redux';

const ProductDetailScreen = ({ navigation, productDetail }) => {
    console.log(productDetail)
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
                    <Text>${productDetail.cost}</Text>
                </View>
                <View style={styles.commentContainer}>
                    <Text>尚無評價</Text>
                </View>
            </View>
            <View style={styles.sellerContainer}>
                <View style={styles.sellerNameContainer}>
                    <Text>商家名稱{productDetail.seller.name}</Text>
                </View>
                <View style={styles.sellerInfo}>
                    <Text>商品數量{productDetail.seller.sell_quantity}，店家評價{productDetail.seller.rates}</Text>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <Text>加入購物車等等</Text>
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
        backgroundColor: 'pink',
        height: '16%',
        paddingHorizontal: 12,
    },
    descriptionTitleContainer: {
        backgroundColor: 'green',
        height: '36%',
        justifyContent: 'center',
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: '300',
    },
    priceContainer: {
        backgroundColor: 'steelblue',
        height: '40%',
        justifyContent: 'center',
    },
    commentContainer: {
        backgroundColor: 'yellow',
        height: '24%',
        justifyContent: 'center',
    },
    sellerContainer: {
        backgroundColor: 'green',
        height: '22%',
        marginTop: 16,
        paddingHorizontal: 12,
    },
    sellerNameContainer: {
        backgroundColor: 'pink',
        height: '60%',
    },
    sellerInfo: {
        backgroundColor: 'orange',
        height: '40%',
        justifyContent: 'center',
    },
    actionContainer: {
        backgroundColor: 'steelblue',
        height: '8%',
        marginTop: 16,
    }
});

const mapStateToProps = state => {
    return {
        productDetail: state.productDetail.info
    }
};

export default connect(mapStateToProps,)(ProductDetailScreen);