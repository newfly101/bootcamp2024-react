import './App.css';
import Toast from "./components/Toast";

function App() {
    const messageArray = [
        {
            title: 'success',
            text: 'Right on! Your account has been updated.'
        },
        {
            title: 'success',
            text: 'Right on! Your account has been updated.'
        },
        {
            title: 'warning',
            text: 'Hmmm. something doesn\'t look right.'
        },
        {
            title: 'warning',
            text: 'Hmmm. something doesn\'t look right.'
        },
        {
            title: 'error',
            text: 'Uh oh! Something went terribly wrong!'
        },
        {
            title: 'error',
            text: 'Uh oh! Something went terribly wrong!'
        }
    ]
    return (
        <div className="wrapper">
            {messageArray.map((message, index) =>
                <Toast message={message}/>
            )}
        </div>
    );
}

export default App;
