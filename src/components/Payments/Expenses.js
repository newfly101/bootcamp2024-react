import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = React.useState('all');
    const [getAllFilter, setFilteredGetAllFilter] = React.useState([]);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // 모두 보기를 위해 'all' 을 삽입 배열로 설정
    const getAllFilteredYears = () => {
        let uniqueYears = ['all', ...new Set(props.items.map(item => item.date.getFullYear().toString()))];
        setFilteredGetAllFilter(uniqueYears);
    };

    React.useEffect(() => {
        getAllFilteredYears();
    }, [props.items]);

    const filteredExpenses = props.items.filter((expense) => {
        // selected='all' 이면 모든 리스트를 보여줘야 하기 때문에 true return
        if (filteredYear === 'all') {
         return true;
        } else {
            // filter로 걸러진 리스트만 보여줌
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