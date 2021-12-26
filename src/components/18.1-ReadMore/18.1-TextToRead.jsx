import React, {useState} from 'react'

const TextToRead = ({ text, maxLength }) => {
    const [readMode, setReadMode] = useState(false)
    const [readMoreTitle, setReadMoreTitle] = useState("Read more")
    
    const read = (e) => {
        setReadMode(!readMode);
        readMoreTitle === "Read more" ? setReadMoreTitle("Read less") : setReadMoreTitle("Read more")
        e.preventDefault()
        console.log(e)
    }

    const display = () => {
        return text.split('').map((letter, index) => {
            if (index <= maxLength) {
                return letter
            } else if (readMode === true) {
                return letter
            }
        })
    }

    return (
        <div>
            {display()}
            <a href="woah" onClick={(e)=> read(e)}>{readMoreTitle}</a>
        </div>
    )
}
export default TextToRead;