import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = (props) => {
    console.log("Expenses",props.items);
    return (
        <Card className="expenses">
            {props.items.map((item, index) => (
            <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
            ))}
        </Card>
    );
}


export default Expenses;