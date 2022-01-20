import React from "react"
import Header from "../Header/Header";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return(
        <>
            <Header/>
            {/*{children}*/}
            <Outlet/>
            {/*<Footer/>*/}
        </>

    )
}

export default Layout
