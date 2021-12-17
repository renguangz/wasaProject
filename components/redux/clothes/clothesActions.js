export const fetchClothesSuccess = (data) => {
    return {
        type: 'FETCH_CLOTHES_SUCCESS',
        payload: data
    }
};

export const fetchClothesFailure = error => {
    return {
        type: 'FETCH_CLOTHES_FAILURE',
        payload: error
    }
};

export const fetchClothes = () => dispatch => {
    fetch('https://mocki.io/v1/38cafb81-e2c0-43ec-b7c7-b7757d298bb6', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        dispatch(fetchClothesSuccess(data))
    }).catch(err => {
        dispatch(fetchClothesFailure(err))
    })
};

export const updateClothes = (key, is_like) => {
    return {
        type: 'UPDATE_CLOTHES',
        payload: {
            key,
            is_like
        }
    }
}