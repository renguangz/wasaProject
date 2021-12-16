const initialState = {
    loading: true,
    clothes: [],
    error: '',
};

const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CLOTHES_SUCCESS':
            return {
                ...state,
                loading: false,
                clothes: action.payload
            }
        case 'FETCH_CLOTHES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
};

export default clothesReducer;