import ShopActionTypes from "./shop.type";

export const fetchCollectionsStart = () => ({
    type : ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type : ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload : collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type : ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload : errorMessage
})

