import React from "react"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import SwiperCore, {Navigation} from "swiper";
import "./Carousel.css"
import {useSelector} from "react-redux";
import {fetchCarousel} from "../../redux/carousel/carousel-actions";
import useDispatchAxios from "../../hooks/useDispatchAxios";

SwiperCore.use([Navigation]);


const Carousel = () => {
    useDispatchAxios("carousel", fetchCarousel, [])
    const carouselData = useSelector(state => state.carouselReducer.carouselData)
    return (
        <Swiper navigation={true} className="mySwiper">
            {
                carouselData.length>0 && carouselData?.map(item =>
                    <SwiperSlide>
                        <img className={`col-12 px-0`} src={item} alt=""/>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default Carousel
