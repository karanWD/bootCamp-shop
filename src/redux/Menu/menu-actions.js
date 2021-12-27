import {menuActionType} from "./menuActionType";

export const fetchMenu = (data) => ({
  type:menuActionType.FETCH,
  payload:data
})