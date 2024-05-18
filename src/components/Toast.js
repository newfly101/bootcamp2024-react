import React from 'react';
import "./Toast.css";

// 리-팩토링
const Toast = ({message}) => {
    return (
        <div>
            <div className={`toast toast-${message.title}`}>
                <main className="toast__message">
                    <header className="toast__message-title">{message.title}</header>
                    <p className="toast__message-text">{message.text}</p>
                </main>
                <button className="toast__button">Dismiss</button>
            </div>
        </div>
    );
};

export default Toast;