import React, { useState, useEffect } from 'react';
import axios from 'axios';
const StarWarsApi = () => {
    const [ term , setTerm ] = useState('')
    const showTitle = (term) => {
        if (term) {
            return <div>{term.data.title}</div>
        }
    }
    useEffect(() => {
        (async ()=> {
            setTerm(await axios.get('https://swapi.dev/api/films/1/'))
        })()
    }, [])

    return (
        <div>
            {showTitle(term)}
        </div>
    )
}

export default StarWarsApi;