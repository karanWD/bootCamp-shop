import React from "react"
import LogoImg from "../../assets/images/logo.png"

const Logo = () => {
    return (
        <div className={`col-12 col-lg-2`}>
            <img className={`col-12`} src={LogoImg} alt=""/>
        </div>
    )
}

export default Logo