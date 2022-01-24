import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {calc, decrement, increment} from "../../redux/Count/count-actions";
import "./Count.css"


const Count = ({quantity}) => {

    console.log(quantity)
    const count = useSelector(state => state.countReducer.count)
    const dispatch = useDispatch()

    return (
        <div className={`d-flex flex-row-reverse me-0 ms-auto align-items-center mt-4 counter`}>

            {/**** Counter With Two Seperate Actions ****/}

            {/*<div>*/}
            {/*    <button onClick={()=>dispatch(increment())}>+</button>*/}
            {/*    <div>*/}
            {/*        {count}*/}
            {/*    </div>*/}
            {/*    <button onClick={()=>dispatch(decrement())}>-</button>*/}
            {/*</div>*/}

            {/**** Counter With Just One Action *****/}

            <button className={`ml-2`} onClick={() =>count < quantity && dispatch(calc(+1))}>+</button>
            <div className={`px-4`}>
                {count}
            </div>
            <button className={`mr-2`} onClick={() =>count> 1 && dispatch(calc(-1))}>-</button>
        </div>
    )
}


export default Count
