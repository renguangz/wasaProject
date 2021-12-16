import { combineReducers } from 'redux';
import clothesReducer from './clothes/clothesReducer';
import productDetailReducer from './productDetail/productDetailReducer';

const rootReducer = combineReducers({
    clothes: clothesReducer,
    productDetail: productDetailReducer
});

export default rootReducer;