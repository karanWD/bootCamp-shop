import React from "react"
import CartSvg from "../../assets/images/cart.svg"

const CartBtn = ({width,height}) => {
    return (
        <>
            <img className={`col-12 px-0`} src={CartSvg} alt="" style={{width:width,height:height}}/>
        </>
    )
}

export default CartBtn
