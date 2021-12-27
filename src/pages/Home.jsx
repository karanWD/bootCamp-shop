import React from "react"
import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import {useSelector} from "react-redux";

const Home = () => {

    return(
        <div>
            {console.log("home")}
           <Carousel/>
           <Category/>
        </div>
    )
}

export default Home
