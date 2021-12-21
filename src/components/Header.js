import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: Colors.primaryFont }}>
                    山葵組 WasaTeam
                </Text>
            </View>
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