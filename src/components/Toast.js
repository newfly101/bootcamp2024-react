import React from 'react';
import "./Toast.css";

const Toast = ({ message, children }) => {
    // console.log('toast component is executed');
    return (
        <div className={`toast toast-${message.title}`}>
            {children}
        </div>
    );
};

export default Toast;
