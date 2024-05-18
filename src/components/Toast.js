import React from 'react';
import "./Toast.css";
import ToastButton from "./ToastButton";
import ToastMessage from "./ToastMessage";

// 리-팩토링
const Toast = ({message}) => {
    return (
        <div>
            <div className={`toast toast-${message.title}`}>
                <ToastMessage />
                <ToastButton />
            </div>
        </div>
    );
};

export default Toast;