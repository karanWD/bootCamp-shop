import {combineReducers} from "redux";
import {countReducer} from "./Count/count-reducer";
import {menuReducer} from "./Menu/menu-reducer";

export default combineReducers({
    countReducer:countReducer,
    menuReducer:menuReducer
})