import React from "react"
import "./Nav.css"
import {Link, useResolvedPath, useMatch, resolvePath} from "react-router-dom"

const Nav = ({data}) => {
    return (

        <div className={`col-12  nav`}>
            <ul className={`d-flex mb-0 justify-content-end col-12 pt-3 px-4`}>

                {
                    data.map(item =>
                        <CustomLink to={item.link}>
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
                        </CustomLink>
                    )
                }
            </ul>
        </div>
    )
}

function CustomLink({children, to, ...props}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});
    console.log(resolved, match)
    return (
        <div>
            <Link
                style={{textDecoration: match ? "underline" : "none"}}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " (active)"}
        </div>
    );
}

export default Nav
