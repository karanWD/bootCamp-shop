import React from "react";
import "./succeedAlert.css"
import Image from "../../assets/images/addtocart.png"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {setModal} from "../../redux/Modal/modal-actions";


const SucceedAlert = ({text}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (

        <div className={`success-alert`}>
            <div className={`success-alert-icon col-2 mx-auto block`}>
                <img className={`w-100`} src={Image} alt={text}/>
            </div>
            <div className={`success-alert-text mt-3`}>
                {text}
            </div>
            <div className={`d-flex justify-content-center align-items-center mt-4`}>
                <button className={`mx-2 continue-btn`}
                        onClick={()=>{
                            dispatch(setModal())
                        }
                        }>ادامه خرید</button>

                <button className={`mx-2 buy-btn`}
                        onClick={()=>{
                            navigate("/cart")
                            dispatch(setModal())
                        }}>مشاهده و پرداخت</button>
            </div>
        </div>
    )
}

export default SucceedAlert