import React from 'react';

import './PaymentForm.css';

const PaymentForm = ({getPaymentFormData}) => {
    const [objectState, setObjectState] = React.useState({
        name : '',
        price : 0,
        toDate : new Date()
    });

    const changeObjectStateName = (event) => {
        setObjectState(prevState => ({...prevState, name: event.target.value}));
    };
    const changeObjectStatePrice = (event) => {
        setObjectState(prevState => ({...prevState, price: event.target.value}));
    };
    const changeObjectStateToDate = (event) => {
        setObjectState(prevState => ({...prevState, toDate: event.target.value}));
    };

    const buttonSubmitHandler = (event) => {
        event.preventDefault();

        getPaymentFormData(objectState);
        console.log("objectState", objectState);
        // 초기화
        setObjectState({
            name : '',
            price : 0,
            toDate : new Date()
        });
    }

    return (
        <form onSubmit={buttonSubmitHandler}>
            <div className='new-payment__controls'>
                <div className='new-payment__control'>
                    <label>이름</label>
                    <input type='text' value={objectState.name} onChange={changeObjectStateName} />
                </div>
                <div className='new-payment__control'>
                    <label>금액</label>
                    <input type='number' min='0.01' step='0.01' value={objectState.price} onChange={changeObjectStatePrice} />
                </div>
                <div className='new-payment__control'>
                    <label>날짜</label>
                    <input type='date' min='2019-01-01' max='2024-12-31' value={objectState.toDate}
                           onChange={changeObjectStateToDate}/>
                </div>
            </div>
            <div className='new-payment__actions'>
                <button type='submit' onClick={buttonSubmitHandler}>결제 추가</button>
            </div>
        </form>
    );
};

export default PaymentForm;