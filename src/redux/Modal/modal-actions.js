import {modalActionType} from "./modalActionType";

export const setModal = (data) => ({
  type:modalActionType.SET_MODAL,
  payload:data
})
