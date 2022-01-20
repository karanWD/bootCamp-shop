import React from "react"
import "./category.css"
import useDispatchAxios from "../../hooks/useDispatchAxios";
import {useSelector} from "react-redux";
import {fetchCategory} from "../../redux/category/category-actions";

const Category = () => {
    // const {data, error} = useAxios("category")
    useDispatchAxios("category",fetchCategory,[])
    const categories = useSelector(state => state.categoryReducer.categories)

    return (
        categories ?
            <div className={`d-flex categories px-4 py-5`}>
                <div className={`col-lg-7 d-flex flex-wrap `}>
                    <div className={`col-lg-4  p-1 position-relative`}>
                        <img src={categories?.sport?.image} alt={categories?.sport?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {categories?.sport?.title}
                        </div>
                    </div>
                    <div className={`col-lg-8  p-1 position-relative`}>
                        <img src={categories?.men?.image} alt={categories?.men?.title}  className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {categories?.men?.title}
                        </div>
                    </div>
                    <div className={`col-lg-8  p-1 position-relative`}>
                        <img src={categories?.accessories?.image} alt={categories?.accessories?.title}  className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {categories?.accessories?.title}
                        </div>
                    </div>
                    <div className={`col-lg-4  p-1 position-relative`}>
                        <img src={categories?.shoes?.image} alt={categories?.shoes?.title}  className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {categories?.shoes?.title}
                        </div>
                    </div>
                </div>
                <div className={`col-lg-5 d-flex flex-wrap `}>
                    <div className={`col-lg-12 p-1 position-relative`}>
                        <img src={categories?.women?.image} alt={categories?.women?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {categories?.women?.title}
                        </div>
                    </div>
                    <div className={`col-lg-6  p-1 position-relative`}>
                        <img src={categories?.kids?.image} alt={categories?.kids?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {categories?.kids?.title}
                        </div>
                    </div>
                    <div className={`col-lg-6  p-1 position-relative`}>
                        <img src={categories?.shirt?.image} alt={categories?.shirt?.title} className={`col-12 px-0 h-100`}/>
                        <div className={`category-overlay`}>
                            {categories?.shirt?.title}
                        </div>
                    </div>
                </div>
            </div>
            :
            <h1 className={`col-12 text-center`}>Loading</h1>
    )
}

export default Category
