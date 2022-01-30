import {AlertActionType} from "./AlertActionType";

const INITIALSTATE = {
    alert:null
}

export const alertReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case(AlertActionType.SET_ALERT) :
            return {
                ...state,
                alert: action.payload
            }
        default :
            return state
    }
}

