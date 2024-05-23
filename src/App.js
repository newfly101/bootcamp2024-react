import './App.css';
import Toast from "./components/Toast";
import ToastMessage from "./components/ToastMessage";
import ToastButton from "./components/ToastButton";
import NewPayment from "./components/NewPayment/NewPayment";
import Expenses from "./components/Payments/Expenses";
import {useState} from "react";

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

    const expenses = [
        {
            id: '1',
            title: '수건',
            amount: 12.33,
            date: new Date(2025, 8, 14),
        },
        {
            id: '1',
            title: '수건',
            amount: 12.33,
            date: new Date(2025, 8, 14),
        },
    ];

    // const [parentObjectState, setParentObjectState] = useState({
    //     name : '',
    //     price : 0,
    //     toDate : new Date()
    // })

    const getPaymentFormData = (data) => {
        console.log("objectState : ", data);
    }

    return (
        <div className="wrapper">
            {messageArray.map((message, index) => (
                <Toast key={index} message={message}>
                    <ToastMessage message={message}/>
                    <ToastButton message={message}/>
                </Toast>
            ))}
            <NewPayment getPaymentFormData={getPaymentFormData}/>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
