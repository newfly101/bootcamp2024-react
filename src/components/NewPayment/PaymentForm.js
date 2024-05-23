import React from 'react';

import './PaymentForm.css';

const PaymentForm = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [todate, setTodate] = React.useState('');

    const changeNameHandle = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const changePriceHandle = (event) => {
        setPrice(event.target.value);
    }

    const changeToDateHandle = (event) => {
        setTodate(event.target.value);
    }

    const buttonSubmitHandler = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(price);
        console.log(todate);
    }

    return (
        <form>
            <div className='new-payment__controls'>
                <div className='new-payment__control'>
                    <label>이름</label>
                    <input type='text'  onChange={changeNameHandle} />
                </div>
                <div className='new-payment__control'>
                    <label>금액</label>
                    <input type='number' min='0.01' step='0.01' onChange={changePriceHandle} />
                </div>
                <div className='new-payment__control'>
                    <label>날짜</label>
                    <input type='date' min='2019-01-01' max='2024-12-31'
                           onChange={changeToDateHandle}/>
                </div>
            </div>
            <div className='new-payment__actions'>
                <button type='submit' onClick={buttonSubmitHandler}>결제 추가</button>
            </div>
        </form>
    );
};

export default PaymentForm;