import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {calc} from "../../redux/Count/count-actions";


const Count = () => {
    const count = useSelector(state => state.countReducer.count)
    const dispatch = useDispatch()

    return (
        <div className={`d-flex align-items-center`}>

            <button className={`mx-4`} onClick={() => dispatch( calc(+1)) }> + </button>

            <div>
                {count}
            </div>

            <button className={`mx-4`} onClick={() => dispatch( calc(-1)) }> - </button>

        </div>
    )
}


export default Count