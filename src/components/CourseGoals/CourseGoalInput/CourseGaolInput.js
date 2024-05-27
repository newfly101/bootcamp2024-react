import React, {useState} from 'react';
import Button from "../UI/Button/Button";
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
            <div className={`form-control ${!isValid && enteredValue.length !== 0 && 'invalid'}`}>
                <label>목표</label>
                <input type="text" onChange={goalInputChangeHandler} value={enteredValue}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseGaolInput;