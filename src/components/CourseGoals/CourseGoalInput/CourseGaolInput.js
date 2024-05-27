import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import {styled} from "styled-components";
import "./CourseGaolInput.css";

const CourseGaolInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length !== 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            setEnteredValue(""); // 초기화
            return ;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue(""); // 초기화
    };

    console.log("enteredValue : ",enteredValue.length, "isValid", isValid);

    return (
        <form onSubmit={formSubmitHandler}>
            {/*<div className={`form-control ${!isValid && enteredValue.length !== 0 && 'invalid'}`}>*/}
            {/*    <label>목표</label>*/}
            {/*    <input type="text" onChange={goalInputChangeHandler} value={enteredValue}*/}
            {/*    />*/}
            {/*</div>*/}
            <FormControl>
                <FormControlLabel />
                <FormControlInput type="text" onChange={goalInputChangeHandler} value={enteredValue}
                inValid={isValid}/>
            </FormControl>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseGaolInput;

const FormControl = styled.div`
    margin: 0.5rem 0;
    padding-left: 10px;
`;

const FormControlLabel = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
`;

const FormControlInput = styled.input`
    display: block;
    width: 50%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    
    &:focus {
        outline: none;
        border-color: blue;
    }
    
    ${props => !props.inValid && props.value.length !== 0 && `
        background: salmon;
        border: 1px solid red;
    `}
`;