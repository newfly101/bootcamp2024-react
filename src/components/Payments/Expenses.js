import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = React.useState('all');
    const [getAllFilter, setFilteredGetAllFilter] = React.useState([
        'all'
    ]);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const getAllFilteredYears = () => {
        let uniqueYears = [...new Set(props.items.map(item =>
            item.date.getFullYear().toString()))];
        // console.log("uniqueYears",uniqueYears);

        setFilteredGetAllFilter(uniqueYears);
    };

    React.useEffect(() => {
        getAllFilteredYears();
    }, [props.items]);



    const filteredExpenses = props.items.filter((expense) => {
        // console.log("filteredExpenses : each : ",expense);
        if (filteredYear === 'all') {
         return true;
        } else {
            return expense.date.getFullYear().toString() === filteredYear;
        }
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChange={filterChangeHandler}
                options={getAllFilter}
            />
            {filteredExpenses.length > 0 ?
                filteredExpenses.map((item, index) => (
                    <ExpenseItem
                        key={`${item.id}-${index}`}
                        id={item.id}
                        index={index}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                        deletePaymentData={props.deletePaymentData}
                    />
                )) : <p>값이 없습니다.</p>}
        </Card>
    );
}


export default Expenses;