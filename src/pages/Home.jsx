import React from "react"
import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import Count from "../components/Count/Count";

const Home = () => {
    return(
        <div>
           <Carousel/>
           <Category/>
           <Count/>
        </div>
    )
}

export default Home
