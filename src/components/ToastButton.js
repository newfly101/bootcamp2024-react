import React from 'react';
import "./Toast.css";

const ToastButton = ({message}) => {
    return (
        <div>
            <button className="toast__button">Dismiss</button>
        </div>
    );
};

export default ToastButton;