import React from "react";
import {Link} from "react-router-dom";
import User from "../../assets/images/user.png"

const LoginBtn = () =>{
    return(
        <div className={`col-2 px-1 mx-3`}>
            <Link to={"/login"} className={`col-12`}>
                <img className={`col-12`} src={User} alt=""/>
            </Link>
        </div>
    )
}

export default LoginBtn