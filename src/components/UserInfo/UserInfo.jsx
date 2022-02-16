import React, {useEffect, useState} from "react";
import axios from "axios";

const UserInfo = ({token}) =>{

    const [userData,setUserData] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:4000/users?token=${token}`)
            .then(res =>setUserData(res.data[0]) )
    })

    return(
        <div>
            {
                userData?.username
            }
            <div onClick={() => localStorage.removeItem("token")}>
                خروج
            </div>
        </div>
    )
}

export default UserInfo