import React from "react";
import {Link} from "react-router-dom";
import Input from "../components/Input/Input";

const Signup = () => {
    return (
        <div className={` text-center`}>
            <div>
                <h1 className={`d-block col-12`}>Signup</h1>
                <span>
                If  have an account
                <Link to={`/login`}> Login</Link>
                </span>
            </div>
            <div className={`mt-4`}>
                <Input type={"text"} value={``} name={"username"} placeHolder={""}/>
                <Input type={"password"} value={``} name={"password"} placeHolder={"****"}/>
            </div>
            <div>
                <button>
                    Signup
                </button>
            </div>
        </div>
    )
}

export default Signup