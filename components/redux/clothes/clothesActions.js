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
    fetch('https://mocki.io/v1/50eabb82-d5cd-46e7-b330-dbf7f70b10d1', {
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

export const getProduct = (product) => {
    return {
        type: 'GET_PRODUCT',
        payload: product
    }
}

export const updateClothes = (key, is_like) => {
    return {
        type: 'UPDATE_CLOTHES',
        payload: {
            key,
            is_like
        }
    }
}