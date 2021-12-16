import React from "react";
import { TouchableWithoutFeedback, SafeAreaView, Text, View, StyleSheet, Image, ImageBackground } from "react-native";

const ProductDetailScreen = ({ navigation, sellerName }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#EFEFEF', flex: 1 }}>
            <View style={styles.imageBackgroundContainer}>
                <ImageBackground
                    source={{ uri: "data:image/jpeg;base64,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" }}
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
                    <Text style={styles.descriptionTitle}>商品名稱</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text>商品價格</Text>
                </View>
                <View style={styles.commentContainer}>
                    <Text>評價</Text>
                </View>
            </View>
            <View style={styles.sellerContainer}>
                <View style={styles.sellerNameContainer}>
                    <Text>{sellerName}店家名稱</Text>
                </View>
                <View style={styles.sellerInfo}>
                    <Text>商品數量，店家評價</Text>
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
})

export default ProductDetailScreen;