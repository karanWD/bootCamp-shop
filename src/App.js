
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout";
import "swiper/swiper-bundle.css"
import "./app.css"



function App() {
    return (
        <div className="App">
            <Layout>
                <Home/>
            </Layout>
        </div>
    );
}

export default App;
