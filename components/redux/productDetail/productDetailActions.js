// get click data
export const getProductDetail = product => {
    return {
        type: 'FGET_PRODUCT_DETAIL',
        payload: product
    }
};