import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import Layout from "./components/Layout/Layout";
import "swiper/swiper-bundle.css"
import "./app.css"
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AlertContainer from "./components/AlertContainer/AlertContainer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <AlertContainer>
                        <Routes>
                            <Route path={`/`} element={<Layout/>}>
                                <Route index element={<Home/>}/>
                                <Route path={`products/:productId`} element={<Detail/>}/>
                                <Route path={'*'} element={<div>404 Sorry , NOT FOUND</div>}/>
                            </Route>
                            <Route path={'*'} element={<div>404 Sorry , NOT FOUND</div>}/>
                        </Routes>
                    </AlertContainer>
                </Provider>
            </BrowserRouter>
        </div>
    );
}


export default App;
