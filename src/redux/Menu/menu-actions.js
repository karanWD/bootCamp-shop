import {menuActionType} from "./menuActionType";

export const fetchMenu = (data) => ({
  type:menuActionType.FETCH_MENU,
  payload:data
})
