import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ onPress }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={onPress}>
                    <Text>
                        Button
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>
                    Header
                </Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        // backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnContainer: {
        // backgroundColor: 'steelblue',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logoContainer: {
        // backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;