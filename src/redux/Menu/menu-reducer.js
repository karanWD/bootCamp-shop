import {menuActionType} from "./menuActionType";

const INITIALSTATE = {
    menu:[]
}

export const menuReducer = (state=INITIALSTATE,action) => {
    switch (action.type) {
        case menuActionType.FETCH_MENU :
            return {
                ...state,
                menu:action.payload
            }

        default : return state
    }
}
