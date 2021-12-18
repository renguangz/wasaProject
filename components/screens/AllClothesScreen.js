import React from "react";
import { connect } from 'react-redux';
import ClothesScreenLayouts from "../layouts/ClothesScreenLayouts";

const AllClothesScreen = ({ navigation, clothes }) => {
    if (!clothes) {
        return null
    }
    return (
        <ClothesScreenLayouts
            screenTitle='所有商品'
            onPressCard={() => navigation.navigate('ProductDetail')}
            data={clothes}
        />
    )
};

const mapStateToProps = state => {
    return {
        clothes: state.clothes.clothes,
    }
};

export default connect(mapStateToProps,)(AllClothesScreen);