import React, {useState} from 'react'
import './18.2-style.css'
const SimpleTodo = ({ data }) => {
    const [ changeData , setChangeData ] = useState(data)
    const displayData = () => {
        return changeData.map((item,index) => {
            return <div key={item.name}>
                <span className={item.completed ? "completed" : "not-completed"}>{item.name}</span>
                <span onClick={()=>toggleCompleted(index)}> {item.completed ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</span>
            </div>
        })
    }
    const toggleCompleted = (index) => {
        let temp_state = [...changeData];
        let temp_element = { ...changeData[index] };
        temp_element.completed = !temp_element.completed
        temp_state[index] = temp_element
        setChangeData(temp_state)
    }

    return (
        <div>
            {displayData()}
        </div>
    )
}
export default SimpleTodo;