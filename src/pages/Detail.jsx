import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useDispatchAxios from "../hooks/useDispatchAxios";
import {fetchProduct} from "../redux/Detail/detail-actions";
import {useSelector} from "react-redux";
import axios from "axios";
import jwt from "jsonwebtoken"

const Detail = () => {
    const {productId} = useParams()
    const endpoint = `suggestion/${productId}`
    const [formData, setFormData] = useState({})
    useDispatchAxios(endpoint, fetchProduct, productId)
    const data = useSelector(state => state.detailReducer.productDetail)

    const changeHandler = (value, key) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const signInHandler = () => {

        // axios.post("http://localhost:4000/users",{
        //     ...formData,
        //      token
        // })
    }

    return (
        <div>
            <input name={`name`} type="text" placeholder={`name`}
                   onChange={(e) => changeHandler(e.target.value, e.target.name)}/>
            <input name={`pass`} type="text" placeholder={`password`}
                   onChange={(e) => changeHandler(e.target.value, e.target.name)}/>
            <button onClick={signInHandler}>
                SignUp
            </button>
        </div>
    )
}


export default Detail
