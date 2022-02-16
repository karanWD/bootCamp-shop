import React, {useEffect, useState} from "react"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CartBtn from "../CartBtn/CartBtn";
import Nav from "../Nav/Nav";
import {useSelector} from "react-redux";
import useDispatchAxios from "../../hooks/useDispatchAxios";
import {fetchMenu} from "../../redux/Menu/menu-actions";
import {Link} from "react-router-dom"
import LoginBtn from "../LoginBtn/LoginBtn";
import UserInfo from "../UserInfo/UserInfo";


const Header = () => {

    // const {data, error, loading} = useAxios("menu")

    useDispatchAxios("menu", fetchMenu, [])

    const menu = useSelector(state => state.menuReducer.menu)

    const [token,setToken] = useState()

    useEffect(()=>{
        setToken(localStorage.getItem("token"))
    },[])

    const logOut = ()=>{
        localStorage.removeItem("token")
        setToken(null)
    }

    // const [nav,setNav] = useState([])
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/menu")
    //         .then(
    //             (res) => setNav(res.data)
    //         )
    //
    //
    // },[])


    return (
        menu.length > 0 ?
            <div className={`d-flex flex-wrap flex-row-reverse justify-content-between align-items-center py-3 `}>
                <div className={`col-lg-1 px-0`}>
                    <Logo/>
                </div>
                <div className={`col-lg-4 col-xxl-3`}>
                    <Search/>
                </div>
                <div className={`col-lg-2 px-0 d-flex justify-content-start align-items-center`}>
                    <CartBtn width={"30px"} height={"30px"}/>
                    {
                        token
                            ?
                            <UserInfo token={token} logout={logOut}/>
                            :
                            <LoginBtn/>
                    }

                </div>
                <Nav data={menu}/>
            </div>
            :
            <h1 className={`text-center col-12`}>Loading</h1>

    )

}

export default Header
