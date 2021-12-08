import React, {useEffect, useState} from "react"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CartBtn from "../CartBtn/CartBtn";
import Nav from "../Nav/Nav";
import axios from "axios";

import useAxios from "../../hooks/useAxios";

const Header = () => {

    // const [nav,setNav] = useState([])

    const {data, error, loading} = useAxios("menu")

    // useEffect(()=>{
    //     axios.get("http://localhost:4000/menu")
    //         .then(
    //             (res) => setNav(res.data)
    //         )
    //
    //
    // },[])


    return (
        !loading ?
            <div className={`d-flex flex-wrap flex-row-reverse justify-content-between align-items-center py-3 px-0`}>
                <Logo/>
                <Search/>
                <CartBtn width={"30px"} height={"30px"}/>
                <Nav data={data}/>
            </div>
            :
            <h1>Loading</h1>

    )

}

export default Header
