import React, {useEffect} from "react"
import axios from "axios";
import {useDispatch} from "react-redux";

const useDispatchAxios = (endpoint,setData,dependency) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(endpoint)
        axios.get(`http://localhost:4000/${endpoint}`)
            .then(
                (res) => {
                    console.log(res.data)
                    dispatch(setData(res.data))
                })
            .catch(e => console.log(e))
    },dependency)

}

export default useDispatchAxios
