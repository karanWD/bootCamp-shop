import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {calc, decrement, increment} from "../../redux/Count/count-actions";


const Count = () => {
    const count = useSelector(state => state.countReducer.count)
    const dispatch = useDispatch()

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
            <button className={`mx-4`} onClick={() => dispatch( calc(+1)) }> + </button>
            <div>
                {count}
            </div>
            <button className={`mx-4`} onClick={() => dispatch( calc(-1)) }> - </button>

        </div>
    )
}


export default Count
