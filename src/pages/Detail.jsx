import React from "react";
import {useParams} from "react-router-dom";
import useDispatchAxios from "../hooks/useDispatchAxios";
import {fetchProduct} from "../redux/Detail/detail-actions";
import {useSelector} from "react-redux";

const Detail = () => {
    const {productId} = useParams()
    const endpoint = `suggestion/${productId}`
    useDispatchAxios(endpoint, fetchProduct, productId)
    const data = useSelector(state => state.detailReducer.productDetail)


    return (
        <div className={`text-center d-flex flex-wrap align-items-center justify-content-center`}>
            Detail
        </div>
    )
}


export default Detail
