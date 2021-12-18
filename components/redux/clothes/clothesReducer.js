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
        case 'UPDATE_CLOTHES':
            return {
                ...state,
                clothes: state.clothes.map(item => {
                    console.log('keys:', item.key, action.payload.key, item.like)
                    if (item.key != action.payload.key) {
                        return item;
                    } else {
                        return { ...item, like: action.payload.is_like }
                    }
                })
            }
        default: return state
    }
};

export default clothesReducer;