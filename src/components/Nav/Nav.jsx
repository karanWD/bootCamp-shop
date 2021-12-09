import React from "react"


const Nav = ({data}) => {
    return(
        <div className={`col-12 py-4 `}>
            <ul className={`d-flex justify-content-end`}>
                {
                    data.map(item =>
                        <a href={item.link}>
                            <li>
                                {item.title}
                            </li>
                        </a>
                    )
                }
            </ul>
        </div>
    )
}

export default Nav
