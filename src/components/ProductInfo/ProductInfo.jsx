import React, {useState} from "react";
import "./ProductInfo.css"

const ProductInfo = ({data}) => {
    const [selectedColor,setSelectedColor] = useState()
    const [selectedSize,setSelectedSize] = useState()

    return (
        <div className={`text-end col-lg-6 p-4 product-info`}>
            <h4>{data.name}</h4>
            <h6>{data.description}</h6>
            <div className={`my-4`}>
                <div className={`d-flex justify-content-end align-items-center text-end last-price`}>

                    <span className={`toman`}>
                        تومان
                    </span>

                    <div className={`mx-2 last-price-line`}>
                        {data.price}
                    </div>

                    <span className={`discount`}>
                        {data.discount}%
                    </span>

                </div>

                <div className={`d-flex  justify-content-end align-items-center mt-2`}>
                    <span className={`toman mx-2`}>
                             تومان
                    </span>
                    <h3 style={{fontWeight: "bold"}}>

                        {data.price - ((data.discount * data.price) / 100)}
                    </h3>

                </div>
            </div>
            <div className={`product-sizes my-5`}>
                <h5>سایز</h5>
                <ul className={`d-flex justify-content-end`}>
                    {data?.sizes?.map(item =>
                        <li className={`position-relative py-2 px-3 ${item.id === selectedSize ? `` : ``}`} onClick={()=>setSelectedSize(item.id)}>
                            {item.name}

                            {
                                item.id === selectedSize ?
                                <span className={`active`}><img src="" alt=""/></span>
                                :
                                null
                            }
                        </li>
                    )}
                </ul>

            </div>

            <div className={`product-colors my-3`}>
                <h5>رنگ</h5>
                <ul className={`d-flex justify-content-end`}>
                    {data?.colors?.map(item =>
                        <li className={`py-2 px-3`}>
                            <div className={`product-color-item`} style={{
                                backgroundColor: item.code
                            }}></div>
                            <div className={`text-center mt-2`}>
                                {item.name}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ProductInfo