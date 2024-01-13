import React, { useState } from 'react';
import './Message.scss';

const Message = (props) => {
    const temp = JSON.parse(props.message)
    const [message] = useState(temp);

    return (
        <div className="">
            {message.body}
        </div>)

}

export default Message;