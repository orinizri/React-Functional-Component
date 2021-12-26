import React from 'react'

const Time = () => {
    const getTime = (e) => {
        const value = (e.target.value)
        const timeFrame = (e.target.attributes.id.value)
        if (timeFrame === "seconds") {
        e.target.nextElementSibling.nextElementSibling.value = value/60
        e.target.parentElement.lastElementChild.value = value/60/60
        } else if (timeFrame === "minutes") {
        e.target.nextElementSibling.nextElementSibling.value = value/60
        e.target.previousElementSibling.previousElementSibling.value = value*60
        } else if (timeFrame === "hours") {
        e.target.previousElementSibling.previousElementSibling.value = value*60
        e.target.parentElement.firstElementChild.nextElementSibling.value = value*60*60
        }
    }
    return (
        <div className='container'>
            <label htmlFor="seconds">Seconds</label>
            <input id="seconds" onChange={(e)=>getTime(e)}/>
            <label htmlFor="minutes">Minutes</label>
            <input id="minutes" onChange={(e)=>getTime(e)}/>
            <label htmlFor="hours">Hours</label>
            <input id="hours" onChange={(e)=>getTime(e)}/>
        </div>
    )
} 
export default Time;