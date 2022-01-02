import {categoryActionType} from "./categoryActionType";

export const fetchCategory = (data) => ({
    type:categoryActionType.FETCH_CATEGORY,
    payload:data
})
