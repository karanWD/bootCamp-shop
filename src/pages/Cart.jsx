import React from "react";

const Cart = ()=>{
    const data =JSON.parse(localStorage.getItem("cart"))

    console.log(typeof (data))

    return(
        <div>
            {data?.name}
        </div>
    )
}


export default Cart