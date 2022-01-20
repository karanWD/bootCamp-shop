import React from "react"
import "./Nav.css"
import {Link} from "react-router-dom"

const Nav = ({data}) => {
    return (

        <div className={`col-12  nav`}>
            <ul className={`d-flex mb-0 justify-content-end col-12 pt-3 px-4`}>

                {
                    data.map(item =>
                        <Link to={item.link}>
                            <li>
                                {item.title}
                                {item.subMenu.length > 0 ?
                                    <ol className={`p-4`}>
                                        {
                                            item.subMenu.map(itemSub =>
                                                <li className={``}>
                                                    {itemSub.title}
                                                </li>
                                            )
                                        }
                                    </ol>
                                    :
                                    null
                                }

                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    )
}

export default Nav
