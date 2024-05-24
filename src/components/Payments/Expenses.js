import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = React.useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        // return true;
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>값이 없습니다.</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item, index) => (
            <ExpenseItem
                key={`${item.id}-${index}`}
                id={item.id}
                index={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
                deletePaymentData={props.deletePaymentData}
            />
        ))
    }

    console.log("filteredExpenses : ",filteredExpenses);

    // console.log("Expenses",props);
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChange={filterChangeHandler}
            />
            {expensesContent}
        </Card>
    );
}


export default Expenses;