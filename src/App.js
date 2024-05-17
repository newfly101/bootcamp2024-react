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
            <Toast title={messageArray[0].title} text={messageArray[0].text}/>
            <Toast title={messageArray[1].title} text={messageArray[1].text}/>
            <Toast title={messageArray[2].title} text={messageArray[2].text}/>
            <Toast title={messageArray[3].title} text={messageArray[3].text}/>
            <Toast title={messageArray[4].title} text={messageArray[4].text}/>
            <Toast title={messageArray[5].title} text={messageArray[5].text}/>
        </div>
    );
}

export default App;
