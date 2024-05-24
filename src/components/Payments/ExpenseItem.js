import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // console.log("ExpenseItem:",props);
    return (
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button className="expense-item__btn" onClick={() => props.deletePaymentData(props.index, props.id)}>삭제</button>
        </Card>
    );
};

export default ExpenseItem;