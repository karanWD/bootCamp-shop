import {applyMiddleware, createStore} from "redux"
import rootReducer from "./root-reducer"
import {logger} from "redux-logger/src";


const middleware = [logger]

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store