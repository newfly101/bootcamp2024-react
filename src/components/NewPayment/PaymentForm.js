import React from 'react';

import './PaymentForm.css';

const PaymentForm = () => {

    const [objectStore, setObjectStore] = React.useState({
        name : '',
        price : 0,
        toDate : new Date()
    });

    const changeObjectStoreName = (event) => {
        setObjectStore(prevState => ({...prevState, name: event.target.value}));
    };
    const changeObjectStorePrice = (event) => {
        setObjectStore(prevState => ({...prevState, price: event.target.value}));
    };
    const changeObjectStoreToDate = (event) => {
        setObjectStore(prevState => ({...prevState, toDate: event.target.value}));
    };

    const buttonSubmitHandler = (event) => {
        event.preventDefault();
        console.log("objectStore", objectStore);
        // 초기화
        setObjectStore({
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
                    <input type='text' value={objectStore.name} onChange={changeObjectStoreName} />
                </div>
                <div className='new-payment__control'>
                    <label>금액</label>
                    <input type='number' min='0.01' step='0.01' value={objectStore.price} onChange={changeObjectStorePrice} />
                </div>
                <div className='new-payment__control'>
                    <label>날짜</label>
                    <input type='date' min='2019-01-01' max='2024-12-31' value={objectStore.toDate}
                           onChange={changeObjectStoreToDate}/>
                </div>
            </div>
            <div className='new-payment__actions'>
                <button type='submit' onClick={buttonSubmitHandler}>결제 추가</button>
            </div>
        </form>
    );
};

export default PaymentForm;