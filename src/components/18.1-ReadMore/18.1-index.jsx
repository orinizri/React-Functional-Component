import React from 'react'; 
import TextToRead from './components/18.1-ReadMore/18.1-TextToRead';

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus vitae doloremque minus quibusdam quod cum. Delectus nam sit dolores architecto facilis tempora iure quam, illo, molestiae fugiat consequuntur aliquid nihil laboriosam cum? Nesciunt, maxime ea? Totam, rerum nam? Fugiat quas perspiciatis harum aspernatur nobis, est unde culpa voluptate quos."
const maxLength = 50;

export default () => {
    return (
        <div>
            <TextToRead text={text} maxLength={maxLength}/>
        </div>
    )
}