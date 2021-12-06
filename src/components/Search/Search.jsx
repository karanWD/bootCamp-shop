import React from "react"
import "./Search.css"

const Search = () => {
    return (
        <div className={`search d-flex flex-row-reverse `}>
            <input type="text" className={``}/>
            <button>Saarch</button>
        </div>
    )
}

export default Search