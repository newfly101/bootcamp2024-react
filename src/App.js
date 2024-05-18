import './App.css';
import Toast, {hello, world} from "./components/Toast";
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
    ]
    return (
        <div className="wrapper">
            {/*{messageArray.map((message, index) => (*/}
            {/*    <Toast key={index} message={message}>*/}
            {/*        <ToastMessage message={message}/>*/}
            {/*        <ToastButton />*/}
            {/*    </Toast>*/}
            {/*))}*/}
            <Toast message={messageArray[0]}>
                <ToastMessage message={messageArray[0]}/>
                <ToastButton />
            </Toast>
            <Toast message={messageArray[1]}>
                <ToastMessage message={messageArray[1]}/>
                <ToastButton />
            </Toast>
            <Toast message={messageArray[2]}>
                <ToastMessage message={messageArray[2]}/>
                <ToastButton />
            </Toast>
            <div>{hello} {world}</div>
        </div>
    );
}

export default App;
