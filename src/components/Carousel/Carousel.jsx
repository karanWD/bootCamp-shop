import React from "react"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import SwiperCore, {Navigation} from "swiper";
import "./Carousel.css"
import CarouselImg1 from "../../assets/images/carousel1.jpg"
import CarouselImg2 from "../../assets/images/carousel2.jpg"
import CarouselImg3 from "../../assets/images/carousel3.jpg"
import {useDispatch, useSelector} from "react-redux";
import useAxios from "../../hooks/useAxios";
import {fetchCarousel} from "../../redux/carousel/carousel-actions";

SwiperCore.use([Navigation]);


const Carousel = () => {
    const carouselData = useSelector(state => state.carouselReducer.carouselData)
    useAxios("carousel", '', [],fetchCarousel)
    return (
        <Swiper navigation={true} className="mySwiper">
            {
                carouselData?.map(item =>
                    <SwiperSlide>
                        <img className={`col-12 px-0`} src={item} alt=""/>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default Carousel