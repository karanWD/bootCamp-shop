import React from "react"
import {applyMiddleware, createStore} from "redux";
import rootReducers from "./root-reducer"
import {logger} from "redux-logger/src";

const middlewares = [logger]

const store = createStore(rootReducers,applyMiddleware(...middlewares))

export default store