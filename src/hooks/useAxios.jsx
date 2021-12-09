import React, {useState, useEffect} from "react"
import axios from "axios";


const useAxios = (endpoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    console.log("start useAxios", {data, error, loading})
    useEffect(() => {
        console.log("start useEffect")
        const fetch = async () => {
            await console.log("willsetLoading", loading)
            await console.log("donesetLoading", loading)
            try {
                await setLoading(true)
                await axios.get(`http://localhost:4000/${endpoint}`)
                    .then(
                        (res) => {
                            console.log(res.data, "response", loading)
                            setData(res.data)
                        }
                    )
            } catch (e) {
                await console.log("error:", e)
                await setError(e)
            } finally {
                await console.log(loading)
                await setLoading(false)
            }
        }

        fetch()

    }, [endpoint])

    console.log("end useAxios", {data, error, loading})
    return {data, error, loading}
}

export default useAxios
