import {React, useState, useEffect, useRef } from 'react'

export const Edit = () => {
    const [ EditMode , setEditMode ] = useState(false)
    const inputRef = useRef(false)

    const handleMode = () => {
        setEditMode(!EditMode)
        inputRef.current = !inputRef.current
    }
    useEffect(()=> {
        console.log(EditMode)
        if (EditMode === true) {
            inputRef.current.focus()
        }
    }, [EditMode])

    return (
        <div>
            {EditMode && <input ref={inputRef}/>}
            <button onClick={handleMode}>{EditMode ? "save" : "edit"}</button>
        </div>
    )
}