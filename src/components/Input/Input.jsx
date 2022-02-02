import React from "react";

const Input = ({name,type,value,placeHolder}) => {
    return (
        <div className={`my-3 text-start mx-auto col-lg-3`}>
            <label className={`d-block`}>{name}</label>
            <input name={name} type={type} value={value} placeholder={placeHolder}/>
        </div>
    )
}

export default Input