import React from "react"
import "./Search.css"

const Search = () => {
    return (

        <div className={`search d-flex flex-row-reverse p-2`}>
            <input type="text" className={`rtl col-lg-8 text-end`} placeholder={`نام محصول و دسته و ...`}/>
            <button className={`col-lg-4`}>جستجو</button>
        </div>
    )
}

export default Search
