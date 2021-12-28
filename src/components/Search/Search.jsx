import React, {useEffect, useState} from "react"
import "./Search.css"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearch} from "../../redux/Search/search-actions";

const Search = () => {
    const dispatch = useDispatch()
    const searchRes = useSelector(state => state.searchReducer.search)
    const [query, setQuery] = useState()

    useEffect(() => {
        if (query) {
            axios.get(`http://localhost:4000/suggestion?q=${query}`)
                .then(res => dispatch(fetchSearch(res.data)))
        } else {
            dispatch(fetchSearch())
        }
    }, [query])

    return (
        <div className={`search d-flex flex-row-reverse p-2 position-relative`}>
            <input type="text" className={`rtl col-lg-8 text-end`} placeholder={`نام محصول و دسته و ...`}
                   onChange={e => setQuery(e.target.value)}/>
            <button className={`col-lg-4`}>جستجو</button>
            {
                searchRes ?
                    <div style={{
                        position: "absolute",
                        top: "100%",
                        right: "0",
                        width: "100%",
                        maxHeight: "350px",
                        backgroundColor: "#f5f5f5",
                        zIndex: "10",
                        overflow: "auto"
                    }}>
                        <ul>
                            {
                                searchRes.length > 0 ?
                                    searchRes.map(item =>
                                        <li className={`text-end py-2 px-2`}>
                                            {item.name}
                                        </li>
                                    )
                                    :
                                    <li  className={`text-end py-2 px-2`}>No Search Result </li>
                            }                             
                        </ul>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Search
