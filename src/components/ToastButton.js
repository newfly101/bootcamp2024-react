import React from 'react';
import "./Toast.css";

const ToastButton = () => {
    return (
        <div>
            <button className="toast__button" onClick={() => console.log('event console!')}>Dismiss</button>
        </div>
    );
};

export default ToastButton;