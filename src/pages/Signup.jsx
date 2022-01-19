import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useDispatchAxios from "../hooks/useDispatchAxios";
import {fetchProduct} from "../redux/Detail/detail-actions";
import {useSelector} from "react-redux";
import axios from "axios";
import jwt from "jsonwebtoken"

const Signup = () => {
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
        const token = jwt.sign(formData, "bootcampShopMapsaHr")
        console.log(token)
        axios.post("http://localhost:4000/users",{
            ...formData,
            token
        })
    }

    return (
        <div className={`text-center d-flex flex-wrap align-items-center justify-content-center`}>
            <h1 className={`col-12`}>SignUp </h1>
            <p className={`col-12`}>if you dont have an account already signup</p>
            <div className={`col-lg-3`}>
                <input className={`col-12 my-2`} name={`name`} type="text" placeholder={`name`}
                       onChange={(e) => changeHandler(e.target.value, e.target.name)}/>
                <input name={`pass`} type="text" placeholder={`password`} className={`col-12 d-block`}
                       onChange={(e) => changeHandler(e.target.value, e.target.name)}/>
                <button onClick={signInHandler} className={`col-12 my-2`}>
                    SignUp
                </button>
            </div>

        </div>
    )
}


export default Signup
