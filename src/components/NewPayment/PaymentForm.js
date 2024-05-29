import React from 'react';

import styles from './PaymentForm.module.css';

const PaymentForm = ({getPaymentFormData}) => {
    const [objectState, setObjectState] = React.useState({
        id : '1',
        title : '',
        amount : 0,
        date : new Date()
    });

    const changeObjectStateName = (event) => {
        setObjectState(prevState => ({...prevState, title: event.target.value}));
    };
    const changeObjectStatePrice = (event) => {
        setObjectState(prevState => ({...prevState, amount: event.target.value}));
    };
    const changeObjectStateToDate = (event) => {
        setObjectState(prevState => ({...prevState, date: event.target.value}));
    };

    const buttonSubmitHandler = (event) => {
        event.preventDefault();

        getPaymentFormData(objectState);
        // console.log("objectState", objectState);
        // 초기화
        setObjectState({
            id : Math.random().toString(),
            title : '',
            amount : 0,
            date : new Date()
        });
    }

    const makeDateForm = (date) => {
        // console.log(date);
        const month = (new Date(date).getMonth() + 1).toString().padStart(2, '0');
        const year = new Date(date).getFullYear();
        const day = new Date(date).getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // console.log("PaymentForm > objectState : ",objectState);

    return (
        <form onSubmit={buttonSubmitHandler}>
            <div className={styles.newPayment}>
                <div className={styles.newPaymentControls}>
                    <label>이름</label>
                    <input type='text' value={objectState.title} onChange={changeObjectStateName} />
                </div>
                <div className={styles.newPaymentControls}>
                    <label>금액</label>
                    <input type='number' min='0.01' step='0.01' value={objectState.amount} onChange={changeObjectStatePrice} />
                </div>
                <div className={styles.newPaymentControls}>
                    <label>날짜</label>
                    <input type='date' min='2019-01-01' max='2024-12-31' value={makeDateForm(objectState.date)}
                           onChange={changeObjectStateToDate}/>
                </div>
            </div>
            <div className={styles.newPaymentActions}>
                <button type='submit' onClick={buttonSubmitHandler}>결제 추가</button>
            </div>
        </form>
    );
};

export default PaymentForm;