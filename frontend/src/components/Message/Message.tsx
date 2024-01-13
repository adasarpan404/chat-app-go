import React, { useState } from 'react';
import './Message.scss';

interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = (props) => {
    const temp = JSON.parse(props.message);
    const [message] = useState(temp);

    return (
        <div className="">
            {message.body}
        </div>
    );
};

export default Message;
