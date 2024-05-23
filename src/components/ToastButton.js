import React from 'react';
import "./Toast.css";

const ToastButton = ({message}) => {
    const buttonClickHandler = (message) => {
        console.log(message.title);
    }

    return (
        <div>
            <button className="toast__button" onClick={() => buttonClickHandler(message)}>Dismiss</button>
        </div>
    );
};

export default ToastButton;