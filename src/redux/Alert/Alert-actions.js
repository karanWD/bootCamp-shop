import {AlertActionType} from "./AlertActionType";

export const setAlert = (data) => ({
    type:AlertActionType.SET_ALERT,
    payload:data
})
