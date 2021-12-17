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
    fetch('https://mocki.io/v1/ad11ba81-21bb-4bf3-ac5b-509435abce56', {
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