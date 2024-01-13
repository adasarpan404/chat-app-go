import React, { useState } from 'react';
import './ChatInput.scss';

const ChatInput = (props) => {
    const [inputValue, setInputValue] = useState('')

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            props.send(event);
            setInputValue('');
        }
    }
    return (
        <div className='ChatInput'>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message... Hit Enter to Send"
            />
        </div>
    );
}
export default ChatInput;