import React from 'react';
import "./Toast.css";

const Toast = () => {
    return (
        <div>
            <div className="toast toast-success">
                <main className="toast__message">
                    <header className="toast__message-title"> success</header>
                    <p className="toast__message-text">Right on! Your account has been updated.</p>
                </main>
                <button className="toast__button">Dismiss</button>
            </div>
        </div>
    );
};

export default Toast;