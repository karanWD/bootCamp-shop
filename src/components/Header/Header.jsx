import React,{useEffect,useState} from "react"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CartBtn from "../CartBtn/CartBtn";
import Nav from "../Nav/Nav";
import axios from "axios";

const Header = () =>{
    const [nav,setNav] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/menu")
            .then(
                (res) => setNav(res.data)
            )


    },[])


    return(
        <div className={`d-flex flex-wrap flex-row-reverse justify-content-between align-items-center py-3 px-5`}>
          <Logo/>
          <Search/>
          <CartBtn/>
          <Nav data={nav}/>
        </div>
    )

}

export default Header