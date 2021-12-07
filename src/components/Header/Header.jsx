import React, {useEffect, useState} from "react"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CartBtn from "../CartBtn/CartBtn";
import Nav from "../Nav/Nav";
import axios from "axios";

const Header = () => {
    const [nav, setNav] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/menu")
            .then(
                (res) => setNav(res.data)
            )
    }, [])


    return (
        <header className={``}>
            <div
                className={`container d-flex flex-wrap flex-row-reverse justify-content-between align-items-center py-4 `}>
                <div className={`col-12 col-lg-2 px-2`}>
                    <Logo/>
                </div>
                <div className={`d-none d-lg-block col-8`}>
                    <div className={`col-8 mx-auto d-block`}>
                        <Search/>
                    </div>
                </div>
                <div className={`col-lg-2`}>
                    <CartBtn height={"30px"} width={"30px"}/>
                </div>
                
                <Nav data={nav}/>
            </div>
        </header>
    )

}

export default Header
