import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Cart = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (token) {
           axios.get(`http://localhost:4000/cart?userToken=${token}`)
               .then((res)=>{
                   console.log("============",res)
               })
        }
    },[])

    return (
        <div>

        </div>
    )
}


export default Cart