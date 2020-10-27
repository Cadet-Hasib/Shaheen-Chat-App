import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';

function MessageSender() {

    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // DB Refresh on enter
        setInput("")
        setImageURL("")
    }

    return (
        <div className="MessageSender">
            <div className="messageSender__main">
                <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
                <form>
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="main__input"
                    placeholder={"Message"}
                    type="text" />
                    <input
                    onChange={(e) => setImageURL(e.target.value)}
                    className="alternate__input"
                    placeholder={"Image URL (Optional)"} type="text" />
                    <button onClick={handleSubmit} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
