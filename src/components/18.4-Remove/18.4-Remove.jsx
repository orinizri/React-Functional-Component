import {React, useState } from 'react'
const liData = ["one", 'two', 'three','four']
const Removal = () => {
    const [ changeCheckboxes , setchangeCheckboxes ] = useState(liData);
    const getChecked = (e) => {
        console.log(e)
    }
    return (
        <div className='container'>
            <div className="buttons">
                <button>Delete</button>
                <button>Reset</button>
            </div>
            <ul>
                {/* {Object.values(liData).map((object,index) => {
                    console.log(object.valueOf())
                    console.log(index)
                    // return <li id={key}>{key}</li>
                })} */}
                {/* <li>one <input type="checkbox" onClick={(e)=>getChecked(e)}/></li>
                <li>two <input type="checkbox"/></li>
                <li>three <input type="checkbox"/></li>
                <li>four <input type="checkbox"/></li> */}
            </ul>
        </div>
    )
}

export default Removal;