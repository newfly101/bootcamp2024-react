import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        console.log("selected Value : ",event.target.value);
        props.onChange(event.target.value);
    };

    // console.log("$$$$$$$$$$$",props.options);
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {props.options.map((option, index) => (
                        <option key={index} value={option}>
                            {option==='all' ? '모두 보기' : option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;