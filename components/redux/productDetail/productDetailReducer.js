const initialState = {
    info: []
};

const productDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HANDLE_PRESS_PRODUCT':
            return {
                ...state,
                info: action.payload
            }
        default: return state
    }
};

export default productDetailReducer;