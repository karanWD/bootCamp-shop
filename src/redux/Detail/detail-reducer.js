import {detailActionType} from "./detailActionType";

const INITIALSTATE ={
    productDetail:{}
}

export const detailReducer = (state=INITIALSTATE,action) => {
    switch (action.type) {
        case detailActionType.FETCH_PRODUCT :
            return {
                ...state,
                productDetail: action.payload
            }
        default:return state
    }
}

