import React from "react"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import SwiperCore, {Navigation} from "swiper";
import "./Carousel.css"
import CarouselImg1 from "../../assets/images/carousel1.jpg"
import CarouselImg2 from "../../assets/images/carousel2.jpg"
import CarouselImg3 from "../../assets/images/carousel3.jpg"

SwiperCore.use([Navigation]);


const Carousel = () => {
    return(
        <Swiper navigation={true} className="mySwiper">
            <SwiperSlide>
                <img className={`col-12 px-0`} src={CarouselImg1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={`col-12 px-0`} src={CarouselImg2} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={`col-12 px-0`} src={CarouselImg3} alt=""/>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel