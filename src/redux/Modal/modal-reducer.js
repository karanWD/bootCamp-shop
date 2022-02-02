import {modalActionType} from "./modalActionType";

const INITIALSTATE = {
    modal:null
}

export const modalReducer = (state=INITIALSTATE, action) => {
    switch (action.type) {
        case modalActionType.SET_MODAL :
            return {
                ...state,
                modal:action.payload
            }

        default : return state
    }
}
