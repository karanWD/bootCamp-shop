import React from "react"

const Gallery = ({data}) => {
    return(
        <div className={`d-flex flex-row-reverse flex-wrap col-lg-6`}>
            {
                data?.map(item => (
                    <div className={`col-6`}>
                        <img src={item} className={`w-100`} alt="image"/>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery