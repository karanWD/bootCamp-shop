import React from "react";
import "./Input.css"

const Input = ({label, name, type, value, placeHolder, changeHandler}) => {
    return (
        <div className={`my- 3`}>
            <label className={`d-block`}>{label}</label>
            <input className={`col-12`}
                   name={name}
                   type={type}
                   value={value}
                   placeholder={placeHolder}
                   onChange={(e) => changeHandler(name, e.target.value)}
            />
        </div>
    )
}

export default Input