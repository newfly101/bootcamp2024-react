import './App.css';
import Toast from "./components/Toast";
import ToastMessage from "./components/ToastMessage";
import ToastButton from "./components/ToastButton";

function App() {
    const messageArray = [
        {
            title: 'success',
            text: 'Right on! Your account has been updated.'
        },
        {
            title: 'warning',
            text: 'Hmmm. something doesn\'t look right.'
        },
        {
            title: 'error',
            text: 'Uh oh! Something went terribly wrong!'
        }
    ];



    return (
        <div className="wrapper">
            {messageArray.map((message, index) => (
                <Toast key={index} message={message}>
                    <ToastMessage message={message}/>
                    <ToastButton message={message}/>
                </Toast>
            ))}
        </div>
    );
}

export default App;
