import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {calc, decrement, increment} from "../../redux/Count/count-actions";
import {useParams} from "react-router-dom";
import axios from "axios";


const Count = () => {
    const count = useSelector(state => state.countReducer.count)
    const dispatch = useDispatch()
    const {productId} = useParams()
    console.log(productId)
    useEffect(() => {
        axios.get(`http://localhost:4000/suggestion?id=${productId}`)
            .then(
                res => console.log(res.data)
            )
    }, [productId])

    return (
        <div className={`d-flex align-items-center`}>

            {/**** Counter With Two Seperate Actions ****/}

            {/*<div>*/}
            {/*    <button onClick={()=>dispatch(increment())}>+</button>*/}
            {/*    <div>*/}
            {/*        {count}*/}
            {/*    </div>*/}
            {/*    <button onClick={()=>dispatch(decrement())}>-</button>*/}
            {/*</div>*/}


            {/**** Counter With Just One Action *****/}
            <button className={`mx-4`} onClick={() => dispatch(calc(+1))}> +</button>
            <div>
                {count}
            </div>
            <button className={`mx-4`} onClick={() => dispatch(calc(-1))}> -</button>

        </div>
    )
}


export default Count
