import {detailActionType} from "./detailActionType";

export const fetchProduct = (data) => ({
    type:detailActionType.FETCH_PRODUCT,
    payload:data
})