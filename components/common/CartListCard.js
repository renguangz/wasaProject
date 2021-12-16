import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/colors';

const CardListCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.productInfoContainer}>
                <Text style={{ color: Colors.secondaryFont }}>賣家: </Text>
                <Text style={styles.productText}>商品名稱</Text>
                <Text style={{ ...styles.productText, color: Colors.primaryFont }}>商品價格</Text>
                {/* <TouchableOpacity>
                    <Text>取消放入購物車</Text>
                </TouchableOpacity> */}
                <Text style={{ color: Colors.secondaryFont }}>尚無評價</Text>
            </View>
            <View style={styles.productImageContainer}>
                <Image
                    resizeMode="cover"
                    style={{ width: 92, height: 92, borderRadius: 16, overflow: 'hidden' }}
                    source={require('./clothe.jpeg')}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    productInfoContainer: {
        // backgroundColor: 'yellow',
        flex: 1,
        height: '100%',
        paddingVertical: 12,
        justifyContent: 'space-between',
    },
    productText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#272821',
    },
    productImageContainer: {
        // backgroundColor: 'green',
    },
});

export default CardListCard;