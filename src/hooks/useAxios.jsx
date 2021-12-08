import React, {useState, useEffect} from "react"
import axios from "axios";


const useAxios = (endpoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetch = () => {
            try {
                setLoading(true)
                axios.get(`http://localhost:4000/${endpoint}`)
                    .then(
                        (res) => setData(res.data)
                    )
            } catch (e) {

                setError(e)
                setLoading(false)

            } finally {
                setLoading(false)
            }
        }

        fetch()

    }, [endpoint])

    return {data, error, loading}
}

export default useAxios