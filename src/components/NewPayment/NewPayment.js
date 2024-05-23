import React from 'react';
import PaymentForm from './PaymentForm';
import './NewPayment.css';

const NewPayment = ({getPaymentFormData}) => {
    return (
        <div className='new-payment'>
            <PaymentForm getPaymentFormData={getPaymentFormData}/>
        </div>
    );
};

export default NewPayment;