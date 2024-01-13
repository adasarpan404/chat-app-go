import React, { useState, KeyboardEvent } from 'react';
import './ChatInput.scss';

interface ChatInputProps {
    send: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInput: React.FC<ChatInputProps> = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            props.send(event);
            setInputValue('');
        }
    };

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
};

export default ChatInput;
