import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../components/Input/Input";


const Signup = () => {

    const [data, setData] = useState({
        username:"",
        password:""
    })
    const changeHandler = (key, value) => {
        setData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }


    return (
        <div style={{minHeight: "100vh"}} className={`d-flex align-items-center justify-content-center flex-wrap text-center`}>
            <div className={`col-lg-3 text-end`}>
                <div className={`col-12 `}>
                    <h1 className={`d-block col-12`}>ثبت نام</h1>
                    <span>
                اگر حساب کاربری دارید
                <Link to={`/login`}>وارد شوید</Link>
                </span>
                </div>
                <div className={`mt-4 col-12`}>
                    <Input label={`نام`} type={"text"} value={data["username"]} name={"username"} placeHolder={""} changeHandler={changeHandler}/>
                    <Input label={`رمز`} type={"password"} value={data["password"]} name={"password"} placeHolder={""} changeHandler={changeHandler}/>
                </div>
                <div>
                    <button className={`col-12 btn btn-success`} >
                        ثبت نام
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Signup