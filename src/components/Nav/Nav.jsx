import React from "react"
import "./Nav.css"

const Nav = ({data}) => {
    return(
        <div className={`col-12  nav`}>
            <ul className={`d-flex mb-0 justify-content-end col-12 pt-3 px-4`}>
                {
                    data.map(item =>
                        <a href={item.link}>
                            <li>
                                {item.title}
                                <ol className={``}>
                                    {
                                        item.subMenu.map(itemSub =>
                                            <li className={``}>
                                                {itemSub.title}
                                            </li>
                                        )
                                    }
                                </ol>
                            </li>
                        </a>

                    )
                }
            </ul>
        </div>
    )
}

export default Nav