import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = (props) => {
    console.log("Expenses",props);
    return (
        <Card className="expenses">
            {props.items.map((item, index) => (
            <ExpenseItem
                key={`${item.id}-${index}`}
                id={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
                deletePaymentData={props.deletePaymentData}
            />
            ))}
        </Card>
    );
}


export default Expenses;