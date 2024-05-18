import React from 'react';
import "./Toast.css";

const ToastMessage = ({message}) => {
    return (
        <div>
            <main className="toast__message">
                <header className="toast__message-title">{message.title}</header>
                <p className="toast__message-text">{message.text}</p>
            </main>
        </div>
    );
};

export default ToastMessage;