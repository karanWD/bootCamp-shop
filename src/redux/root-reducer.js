import {combineReducers} from "redux";
import {countReducer} from "./Count/count-reducer";
import {menuReducer} from "./Menu/menu-reducer";
import {carouselReducer} from "./carousel/carousel-reducer";

import {categoryReducer} from "./category/category-reducer";

import {searchReducer} from "./search/search-reducer";


export default combineReducers({
    countReducer:countReducer,
    menuReducer:menuReducer,
    carouselReducer:carouselReducer,

    categoryReducer:categoryReducer  ,

    searchReducer:searchReducer

})
