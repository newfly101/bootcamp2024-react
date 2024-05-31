import React from 'react';
import classes from "../components/Login/Login.module.css";

const Input = (props) => {
    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.type}>{props.label}</label>
            <input
                type={props.type}
                id={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                ref={props.ref}
            />
        </div>
    );
};

export default Input;