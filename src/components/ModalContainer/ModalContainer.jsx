import React from "react";
import "./ModalContainer.css"

const ModalContainer = ({children}) => {
    return(
        <div className={`modal-container col-5`}>
                {children}
        </div>
    )
}

export default ModalContainer