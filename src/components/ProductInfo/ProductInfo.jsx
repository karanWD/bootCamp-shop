import React, {useState} from "react";
import "./ProductInfo.css"
import Count from "../Count/Count";

const ProductInfo = ({data}) => {

    const [selectedColor, setSelectedColor] = useState()
    const [selectedSize, setSelectedSize] = useState()

    return (
        <div className={`text-end col-lg-6 p-4 product-info`}>
            <h4>{data.name}</h4>
            <h6 className={`ps-5`}>{data.description}</h6>
            <div className={`my-4`}>
                {
                    data.discount>0?
                        <div className={`d-flex justify-content-end align-items-center text-end last-price`}>
                            <>
                        <span className={`toman`}>
                            تومان
                            </span>
                                <div className={`mx-2 last-price-line`}>
                                    {
                                        Number(data?.price).toLocaleString()
                                    }

                                </div>
                                <span className={`discount`}>
                                {data.discount}%
                            </span>
                            </>
                        </div>
                        :
                        null
                }

                <div className={`d-flex  justify-content-end align-items-center mt-2`}>
                    <span className={`toman mx-2`}>
                             تومان
                    </span>
                    <h3 style={{fontWeight: "bold"}}>
                        {Number(data.price - ((data.discount * data.price) / 100)).toLocaleString()}
                    </h3>

                </div>
            </div>
            <div className={`product-sizes mt-3`}>
                <h6>سایز</h6>
                <ul className={`d-flex justify-content-end mt-3`}>
                    {data?.sizes?.map(item =>
                        <li className={`position-relative py-2 px-3 ${item.id === selectedSize ? `selectedSize` : ``}`}
                            onClick={() => setSelectedSize(item.id)}
                        >
                            {item.name}
                        </li>
                    )}
                </ul>
            </div>
            <div className={`product-colors mt-4`}>
                <h6>رنگ</h6>
                <ul className={`d-flex justify-content-end`}>
                    {data?.colors?.map(item =>
                        <li className={`py-2 px-2`} onClick={() => setSelectedColor(item.id)}>
                            <div className={`position-relative product-color-item`} style={{
                                backgroundColor: item.code
                            }}>
                                {
                                    item.id === selectedColor ?
                                        <span className={`check-container`}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </span>
                                        :
                                        null
                                }


                            </div>
                            <div className={`text-center mt-2`}>
                                {item.name}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className={`product-count mt-4`}>
                <h6>تعداد</h6>
                <Count quantity={data.quantity}/>
            </div>
        </div>
    )
}

export default ProductInfo