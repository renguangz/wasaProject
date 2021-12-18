const initialState = {
    info: []
};

const productDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCT_DETAIL':
            return {
                ...state,
                info: action.payload
            }
        default: return state
    }
};

export default productDetailReducer;