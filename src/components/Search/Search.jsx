import React, {useEffect, useState} from "react"
import "./Search.css"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearch} from "../../redux/search/search-actions";
import {Link, useNavigate} from "react-router-dom"


const Search = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const searchRes = useSelector(state => state.searchReducer.search)
    const [query, setQuery] = useState()
    const [activeSearch, setActiveSearch] = useState(0)

    useEffect(() => {
        setActiveSearch(0)
        if (query) {
            axios.get(`http://localhost:4000/suggestion?q=${query}`)
                .then(res => dispatch(fetchSearch(res.data)))
        } else {
            dispatch(fetchSearch())
        }
    }, [query])

    const keyHandler = (e) => {
        if (searchRes?.length > 0) {
            if (e.which === 38) {
                if (activeSearch === 0) {
                    setActiveSearch(searchRes.length - 1)
                } else {
                    setActiveSearch(prevState => prevState - 1)
                }
            }
            else if (e.which === 40) {
                if (activeSearch === searchRes.length - 1) {
                    setActiveSearch(0)
                } else {
                    setActiveSearch(prevState => prevState + 1)
                }
            }
            else if (e.which === 13) {
                // console.log(searchRes[activeSearch].id)
                navigate(`/products/${searchRes[activeSearch].id}`)
                dispatch(fetchSearch())
            }
        }
    }

    return (
        <div className={`search d-flex flex-row-reverse p-2 position-relative`}>
            <input type="text" className={`rtl col-lg-12 text-end`} placeholder={`نام محصول و دسته و ...`}
                   onChange={e => setQuery(e.target.value)}
                   onKeyDown={keyHandler}
            />
            {/*<button className={`col-lg-4`}>جستجو</button>*/}
            {
                searchRes ?
                    <div className={`search-suggest`}>
                        <ul className={`ps-0 mb-0`}>
                            {
                                searchRes.length > 0 ?
                                    searchRes.map((item, i) =>
                                        <Link to={`/products/${item.id}`}>
                                            <li className={`text-end py-3 px-2 ${activeSearch === i ? `active-search-item` : ``}`}>
                                                {item.name}
                                            </li>
                                        </Link>
                                    )
                                    :
                                    <li className={`text-end py-2 px-2`}>No Search Result </li>

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
