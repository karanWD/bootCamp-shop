import React from "react"
import "./category.css"
import useAxios from "../../hooks/useAxios";

const Category = () => {
    const {data, error, loading} = useAxios("category")

    return (
        !loading ?
            <div className={`d-flex categories px-4 py-5`}>
                <div className={`col-lg-7 d-flex flex-wrap `}>
                    <div className={`col-lg-4  p-1 position-relative`}>
                        <img src={data?.sport?.image} alt={data?.sport?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {data?.sport?.title}
                        </div>
                    </div>
                    <div className={`col-lg-8  p-1 position-relative`}>
                        <img src={data?.men?.image} alt={data?.men?.title}  className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {data?.men?.title}
                        </div>
                    </div>
                    <div className={`col-lg-8  p-1 position-relative`}>
                        <img src={data?.accessories?.image} alt={data?.accessories?.title}  className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {data?.accessories?.title}
                        </div>
                    </div>
                    <div className={`col-lg-4  p-1 position-relative`}>
                        <img src={data?.shoes?.image} alt={data?.shoes?.title}  className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {data?.shoes?.title}
                        </div>
                    </div>
                </div>
                <div className={`col-lg-5 d-flex flex-wrap `}>
                    <div className={`col-lg-12 p-1 position-relative`}>
                        <img src={data?.women?.image} alt={data?.women?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {data?.women?.title}
                        </div>
                    </div>
                    <div className={`col-lg-6  p-1 position-relative`}>
                        <img src={data?.kids?.image} alt={data?.kids?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {data?.kids?.title}
                        </div>
                    </div>
                    <div className={`col-lg-6  p-1 position-relative`}>
                        <img src={data?.shirt?.image} alt={data?.shirt?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {data?.shirt?.title}
                        </div>
                    </div>
                </div>
            </div>
            :
            <h1 className={`col-12 text-center`}>Loading</h1>
    )
}

export default Category
