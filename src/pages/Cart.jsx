import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("cart"))
    const token = JSON.parse(localStorage.getItem("token"))

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    },[])

    return (
        <div>
            {data?.name}
        </div>
    )
}


export default Cart