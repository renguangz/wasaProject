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
    fetch('https://mocki.io/v1/308eae52-f8ad-4fe1-9b5a-5e9a92fb591b', {
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