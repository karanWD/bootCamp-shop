import React, {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import useDispatchAxios from "../hooks/useDispatchAxios";
import {fetchProduct} from "../redux/Detail/detail-actions";
import {useSelector} from "react-redux";
import Gallery from "../components/Gallery/Gallery";
import ProductInfo from "../components/ProductInfo/ProductInfo";



const Detail = () => {
    const {productId} = useParams()
    const endpoint = `suggestion/${productId}`

    useDispatchAxios(endpoint,fetchProduct,productId)
    const data = useSelector(state => state.detailReducer.productDetail)

    return(
        <div className={`d-flex flex-row-reverse flex-wrap`}>
            <Gallery data={data?.images}/>
            <ProductInfo data={data}/>
        </div>
    )
}


export default Detail