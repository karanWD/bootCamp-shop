import {searchActionType} from "./searchActionType";

export const fetchSearch = (data)=>({
    type:searchActionType.FETCH,
    payload:data
})
