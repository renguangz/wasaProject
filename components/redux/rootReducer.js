import { combineReducers } from 'redux';
import clothesReducer from './clothes/clothesReducer';

const rootReducer = combineReducers({
    clothes: clothesReducer,
});

export default rootReducer;