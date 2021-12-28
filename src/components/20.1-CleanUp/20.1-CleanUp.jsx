import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const AnotherComponent = (props) => {
    const manageToggle = () => {
        if (props.data === true) {
            return (
                <div>
                    {props.sendCountry}
                </div>
            )
        } else {
            return <div>off</div>
        }
    }
    return (
        <div>
            {manageToggle()}
        </div>
    )
}
export const CleanUp = () => {
        const [ data , setData ] = useState('')
        const [ toggler, SetToggler ] = useState(true)
        useEffect(()=>{
            const fetchData = async () => {
                const response = await axios.get('https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/');
                setData(response.data[0].name.common);
            }
            fetchData()
        }, [])
        const showData = ()=> {
            if (data) {
                return <div>{data}</div>
            }
        }
        return (
            <div>
                <AnotherComponent data={toggler} sendCountry={data}/>
                <button onClick={()=>SetToggler(!toggler)}>click</button>
            </div>
    )
}
