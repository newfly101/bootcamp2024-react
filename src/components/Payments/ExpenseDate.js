import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
    // console.log("ExpenseDate:",props);
    const year = props.date instanceof Date ? props.date.getFullYear() : 'Invalid Year';
    const month = props.date instanceof Date ? props.date.getMonth() : 'Invalid Month';
    const day = props.date instanceof Date ? props.date.getDate() : 'Invalid Month';

    // console.log("month",month);
    // console.log("day",day);
    // console.log("year",year);

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}월</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}일</div>
        </div>
    );
};

export default ExpenseDate;