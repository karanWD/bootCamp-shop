import React from "react";
import {Link} from "react-router-dom";
import Input from "../components/Input/Input";

const Login = () => {
    return (
        <div className={` text-center`}>
            <div>
                <h1 className={`d-block col-12`}>Login</h1>
                <span>
                If dont have an account
                <Link to={`/signup`}> Create Your Account</Link>
                </span>
            </div>
            <div className={`mt-4`}>
                <Input type={"text"} value={``} name={"username"} placeHolder={""}/>
                <Input type={"password"} value={``} name={"password"} placeHolder={"****"}/>
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login