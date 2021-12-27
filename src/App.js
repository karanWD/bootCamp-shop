import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout";
import "swiper/swiper-bundle.css"
import "./app.css"
import {Provider} from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter/Counter";


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Layout>
                    <Home/>
                    {console.log("app")}
                    <Counter/>
                </Layout>
            </Provider>
        </div>
    );
}

export default App;
