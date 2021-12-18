import React from "react";
import { connect } from 'react-redux';
import ClothesScreenLayouts from "../layouts/ClothesScreenLayouts";

const GirlClothesScreen = ({ clothes, navigation }) => {
    const girlClothes = clothes && clothes.filter(item => item.tag === 'female')
    if (!clothes) {
        return null
    }
    return (
        <ClothesScreenLayouts
            screenTitle='女生服飾'
            onPressCard={() => navigation.navigate('ProductDetail')}
            data={girlClothes}
        />
    )
};

const mapStateToProps = state => {
    return {
        clothes: state.clothes.clothes,
    }
};

export default connect(mapStateToProps,)(GirlClothesScreen);