import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"


const SignIn = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    const [err, setErr] = useState()
    const changeHandler = (value, key) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const signInHandler = () => {
        axios.get(`http://localhost:4000/users?name=${formData.name}&pass=${formData.pass}`)
            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data[0].token))
                navigate("/")
            })
            .catch(e =>
                setErr("اطلاعات وارد شده صحیح نمی باشد")
            )
    }

    return (
        <div className={`text-center d-flex flex-wrap align-items-center justify-content-center`}>
            <h1 className={`col-12`}>SignIn </h1>
            <p className={`col-12`}>if you have an account SignIn</p>
            <div className={`col-lg-3`}>
                <input className={`col-12 my-2`} name={`name`} type="text" placeholder={`name`}
                       onChange={(e) => changeHandler(e.target.value, e.target.name)}/>
                <input name={`pass`} type="text" placeholder={`password`} className={`col-12 wd-block`}
                       onChange={(e) => changeHandler(e.target.value, e.target.name)}/>
                {
                    err &&
                    <div>{err}</div>
                }
                <button onClick={signInHandler} className={`col-12 my-2`}>
                    SignIn
                </button>
            </div>

        </div>

    )
}

export default SignIn
