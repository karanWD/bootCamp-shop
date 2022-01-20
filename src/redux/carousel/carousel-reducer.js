import {carouselActionType} from "./carouselActionType";

const INITIALSTATE = {
    carouselData: []
}

export const carouselReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case(carouselActionType.FETCH_CAROUSEL) :
            return {
                ...state,
                carouselData: action.payload
            }
        default :
            return state
    }
}

