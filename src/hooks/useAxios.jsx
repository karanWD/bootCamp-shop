import React, {useState, useEffect} from "react"
import axios from "axios";


const useAxios = (endpoint,dependecy,option) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {

                 axios.get(`http://localhost:4000/${endpoint}${option}`)
                    .then(
                        (res) => {
                            setData(res.data)
                        }
                    )
                     .catch(e => console.log(e))




    }, [dependecy])

    return {data, error,}
}

export default useAxios
