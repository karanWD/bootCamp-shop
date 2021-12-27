import {countActionType} from "./countActionType";

const initialState = {
    count:0
}

export const countReducer = (state=initialState,action) => {
    switch (action.type) {
        case(countActionType.INCREMENT) :
            return{
                ...state,
                count:state.count+1
            }
        case(countActionType.DECREMENT) :
            return{
                ...state,
                count:state.count-1
            }
        case countActionType.CALC :
            return {
                ...state,
                count: state.count + action.payload
            }

        default : return state
    }
}

