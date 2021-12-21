import React from "react";
import { connect } from 'react-redux';
import ClothesScreenLayouts from "../layouts/ClothesScreenLayouts";

const BoyClothesScreen = ({ clothes, navigation }) => {
    const boyClothes = clothes && clothes.filter(item => item.tag === 'male')
    if (!clothes) {
        return null
    }
    return (
        <ClothesScreenLayouts
            screenTitle='男生服飾'
            onPressCard={() => navigation.navigate('ProductDetail')}
            data={boyClothes}
        />
    )
};

const mapStateToProps = state => {
    return {
        clothes: state.clothes.clothes,
    }
};

export default connect(mapStateToProps,)(BoyClothesScreen);