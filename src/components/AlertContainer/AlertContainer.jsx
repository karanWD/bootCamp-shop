import React, {useEffect} from "react";
import Alert from "../Alert/Alert";
import {useDispatch, useSelector} from "react-redux";
import {setAlert} from "../../redux/Alert/Alert-actions";

const AlertContainer = ({children}) => {
    const alert = useSelector(state => state.alertReducer.alert)

    return (
        <>
            {children}
            {
                alert && <Alert>{alert}</Alert>
            }
        </>
    )

}

export default AlertContainer
