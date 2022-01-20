import React from "react"
import CartSvg from "../../assets/images/cart.svg"

const CartBtn = ({width,height}) => {
    return (
        <div className={`ps-5`}>
            <img className={`col-12 px-0`} src={CartSvg} alt="" style={{width:width,height:height,opacity:0.5}}/>
        </div>

    )
}

export default CartBtn
