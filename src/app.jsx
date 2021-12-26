import React from 'react';
import SimpleTodo from './components/18.2-SimpleToDo/18.2-SimpleToDo';

const data = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
]


export default () => {
    return (
        <div>
            <SimpleTodo data={data} />
        </div>
    )
}