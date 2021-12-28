import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const AnotherComponent = () => {
    const [ data , setData ] = useState('')
    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get('https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/');
            setData(response.data[0].name.common);
        }
        fetchData()
        return (()=>{
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
            source.cancel('Operation canceled by the user.');
        })
    }, [])
    return (
        <div>
            hello
            {data}
        </div>
    )
}
export const CleanUp = () => {
        const [ toggler, SetToggler ] = useState(false)

        return (
            <div>
                <button onClick={()=>SetToggler(!toggler)}>click</button>
                {toggler && <AnotherComponent/>}
            </div>
    )
}
