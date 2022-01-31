import React from "react"
import Header from "../Header/Header";
import {Outlet} from "react-router-dom"
import ModalContainer from "../ModalContainer/ModalContainer";
import {useSelector} from "react-redux";

const Layout = () => {
    const modal = useSelector(state => state.modalReducer.modal)

    return(
        <>
            <Header/>
            {/*{children}*/}
             <Outlet/>
            {/*<Footer/>*/}

            {
                modal &&
                <ModalContainer>
                    {modal}
                </ModalContainer>
            }

        </>

    )
}

export default Layout
