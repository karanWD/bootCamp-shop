import {countActionType} from "./countActionType";

export const increment = () => ({
    type:countActionType.INCREMENT,
    payload:""
})

export const decrement = () => ({
    type:countActionType.DECREMENT,
    payload:""
})