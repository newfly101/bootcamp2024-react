import './App.css';
import Toast from "./components/Toast";
import ToastMessage from "./components/ToastMessage";
import ToastButton from "./components/ToastButton";
import NewPayment from "./components/NewPayment/NewPayment";
import Expenses from "./components/Payments/Expenses";
import {useState} from "react";
import StyleView from "./components/CourseGoals/StyleView";
import DropDown from "./components/DropDown";
// import AlexaImage from "./images/alexa.png";
// import CortanaImage from "./images/cortana.png";
// import SiriImage from "./images/siri.png";

// console.log("AlexaImage : ",AlexaImage);
// console.log("SiriImage : ",SiriImage);


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
    const [expenses, setExpenses] = useState([{
            id: Math.random().toString(),
            title: '수건',
            amount: 12.33,
            date: new Date(2022, 8-1, 2),
        },
        {
            id: Math.random().toString(),
            title: '과자',
            amount: 6.4,
            date: new Date(2023, 8-1, 2),
        },
    ]);
    const getPaymentFormData = (data) => {
        setExpenses([
            {
                id: Math.random().toString(),
                title: data.title,
                amount: data.amount,
                date: new Date(data.date),
            },
            ...expenses
        ])
    };
    const deletePaymentData = (index, id) => {
        // const newFilteredArray
        //  = expenses.filter((item) => item.id !== id);
        // setExpenses(newFilteredArray);

        console.log("index : ", index);
        console.log("id : ", id);

        const beforeArray = expenses.slice(0, index);
        const afterArray = expenses.slice(index + 1);
        setExpenses([...beforeArray, ...afterArray]);
    }

    const options = [
        {label:"빨강", value:"red" },
        {label:"녹색", value:"green" },
        {label:"파랑", value:"blue" },
    ]


    return (
        <div className="wrapper">
            {messageArray.map((message, index) => (
                <Toast key={index} message={message}>
                    <ToastMessage message={message}/>
                    <ToastButton message={message}/>
                </Toast>
            ))}
            <NewPayment getPaymentFormData={getPaymentFormData}/>
            <Expenses items={expenses} deletePaymentData={deletePaymentData}/>
            {/*<img src={AlexaImage} alt="Alexa" style={{ width:400, height:400 }} />*/}
            {/*<img src={SiriImage} alt="Siri" width={400} height={400}/>*/}
            <StyleView />
            <DropDown options={options}/>
        </div>
    );
}

export default App;
