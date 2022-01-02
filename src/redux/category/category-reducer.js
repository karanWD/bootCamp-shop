import {categoryActionType} from "./categoryActionType";

const INTIIALSTATE = {
    categories:[]
}

export const categoryReducer = (state=INTIIALSTATE,action) => {
    switch (action.type) {
        case (categoryActionType.FETCH_CATEGORY) :
            return{
                ...state,
                categories: action.payload
            }
        default : return state
    }
}

