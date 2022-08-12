import {useState, useEffect} from 'react'

const useFetch = (url) => {

const [data, setData] = useState(null); //updates state
const [isPending, setIsPending] = useState(true); 

    useEffect(() => {
        fetch(url)
            .then(res =>{
               return res.json();
            })
            .then(data => {
                setData(data)
                setIsPending(false)
            })

    }, [url]);

    return {data, isPending}

}

export default useFetch;