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

    // const expenses = [
    //     {
    //         id: '1',
    //         title: '수건',
    //         amount: 12.33,
    //         date: new Date(2025, 8, 14),
    //     },
    //     {
    //         id: '2',
    //         title: '과자',
    //         amount: 6.33,
    //         date: new Date(2024, 5, 14),
    //     },
    // ];
    const [expenses, setExpenses] = useState([{
            id: '1',
            title: '수건',
            amount: 12.33,
            date: new Date(2025, 9-1, 14),
    }]);


    const getPaymentFormData = (data) => {
        // expenses.push(data);
        setExpenses((prevState) => {
            return [data, ...prevState];
        });
        // console.log("expenses : ", expenses); // 배열에 값추가는 되는데 렌더링이 안됨
    };

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
