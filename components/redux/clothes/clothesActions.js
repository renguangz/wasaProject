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
    fetch('https://mocki.io/v1/f9a6a365-f490-4efa-9dd0-5ddbfce237a1', {
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
}