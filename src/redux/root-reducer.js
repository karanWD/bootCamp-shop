import React from "react"
import {combineReducers} from "redux";
import {countReducer} from "./count/count-reducer";
import {carouselReducer} from "./carousel/carousel-reducer";

export default combineReducers({
    countReducer:countReducer,
    carouselReducer:carouselReducer
})
