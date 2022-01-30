import React from "react";


const Alert = ({children}) =>{
    return(
        <div style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            backgroundColor:"white",
            padding:"15px",
        }}>
            {children}
        </div>
    )
}

export default Alert
