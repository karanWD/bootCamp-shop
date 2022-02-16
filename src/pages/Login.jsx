import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";
import Bg from "../assets/images/signup-bg.jpg";

const Login = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        username:"",
        password:"",
    })

    const changeHandler = (key, value) => {
        setData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const signInHandler = () =>{
        if (data.username && data.password){
            axios.get(`http://localhost:4000/users?username=${data.username}&password=${data.password}`)
                .then(res => {
                    if (res.data.length>0){
                        localStorage.setItem("token",res.data[0].token)
                        navigate("/")
                    }
                    else{
                        alert("چنین کاربری موجود نیست")
                    }
                })
        }
        else {
            alert("لطفا نام و رمز را وارد کنید")
        }
    }

    useEffect(()=>{
        if (localStorage.getItem("token")){
            navigate("/")
        }
    })

    return (
        <div style={{height: "100vh"}} className={`d-flex flex-row-reverse align-items-center justify-content-center flex-wrap text-center`}>
            <div className={`col-lg-4 text-end p-5`}>
                <div className={`col-12 `}>
                    <h3 className={`d-block col-12`}>ورود</h3>
                    <div>
                        اگر حساب کاربری ندارید
                        <Link to={`/signup`}>
                            <a href="" className={`px-2`}>
                                حساب خود را بسازید
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`mt-4 col-12`}>
                    <Input label={`نام`} type={"text"} value={data["username"]}
                           name={"username"} placeHolder={""} changeHandler={changeHandler}
                    />
                    <Input label={`رمز`} type={"password"} value={data["password"]}
                           name={"password"} placeHolder={""} changeHandler={changeHandler}
                    />
                </div>
                <div>
                    <button className={`col-12 mt-4`}
                                onClick={signInHandler}
                            style={{
                                backgroundColor:"#3e4ddb",
                                borderRadius:"10px",
                                padding:"12px 0",
                                border:"none",
                                color:"white"
                            }}
                    >
                        ورود
                    </button>
                </div>
            </div>
            <div className={`col-lg-8`} style={{height:"100%"}}>
                <img className={`w-100`} style={{height:"100%",objectFit:"cover",borderRadius:"0 15px 15px 0"}} src={Bg} alt="background"/>
            </div>
        </div>

    )
}

export default Login