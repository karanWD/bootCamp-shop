import React, {useState, useEffect} from "react"
import axios from "axios";
import {useDispatch} from "react-redux";


const useAxios = (endpoint, option, dependency, setData) => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`http://localhost:4000/${endpoint}${option}`)
            .then(
                (res) => {
                    dispatch(setData(res.data))
                }
            ).catch(e => console.log(e))
    }, dependency)
}

export default useAxios
