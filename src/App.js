import './App.css';

function App() {
    return (
        <div className="wrapper">
            <div className="toast toast-success">
                <main className="toast__message">
                    <header className="toast__message-title"> success</header>
                    <p className="toast__message-text">Right on! Your account has been updated.</p>
                </main>
                <button className="toast__button">Dismiss</button>
            </div>

            <div className="toast toast-warning">
                <main className="toast__message">
                    <header className="toast__message-title">Warning</header>
                    <p className="toast__message-text">Hmmm. something doesn't look right.</p>
                </main>
                <button className="toast__button">Dismiss</button>
            </div>

            <div className="toast toast-error">
                <main className="toast__message">
                    <header className="toast__message-title">Error</header>
                    <p className="toast__message-text">Uh oh! Something went terribly wrong!</p>
                </main>
                <button className="toast__button">Dismiss</button>
            </div>
        </div>
    );
}

export default App;
