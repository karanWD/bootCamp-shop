import {carouselActionType} from "./carouselActionType";

export const fetchCarousel = (data) => ({
    type:carouselActionType.FETCH_CAROUSEL,
    payload:data
})