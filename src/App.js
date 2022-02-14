import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import Layout from "./components/Layout/Layout";
import "swiper/swiper-bundle.css"
import "./app.css"
import {Provider} from "react-redux";
import store from "./redux/store";
import Count from "./components/Count/Count";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Routes>
                        <Route path={`/`} element={<Layout/>}>
                            <Route index element={<Home/>} />
                            <Route path={`products/:productId`} element={<Detail/>}/>
                            <Route path={"cart"} element={<Cart/>} />

                            <Route path={'*'} element={<div>404 Sorry , NOT FOUND</div>}/>
                        </Route>
                        <Route path={"login"} element={<Login/>} />
                        <Route path={"signup"} element={<Signup/>} />
                        <Route path={'*'} element={<div>404 Sorry , NOT FOUND</div>}/>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
