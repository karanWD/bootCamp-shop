import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../redux/count/count-actions";


const Counter = () => {
    console.log("counter")
    const count = useSelector(state=>state.countReducer.count)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <div>
                {count}
            </div>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter