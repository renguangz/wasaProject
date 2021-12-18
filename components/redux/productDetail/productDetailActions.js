// get click data
export const getProductDetail = product => {
    return {
        type: 'GET_PRODUCT_DETAIL',
        payload: product
    }
};