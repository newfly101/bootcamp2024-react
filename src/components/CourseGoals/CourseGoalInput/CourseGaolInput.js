import React, {useState} from 'react';
import Button from "../UI/Button/Button";

const CourseGaolInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length !== 0) {
            setIsValid(true);
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
        setIsValid(true);
    };

    console.log("enteredValue : ",enteredValue.length);

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>목표</label>
                <input type="text" onChange={goalInputChangeHandler} value={enteredValue}
                       style={{backgroundColor: isValid ? "transparent" : enteredValue.length === 0 ? "transparent" : 'red',
                               borderColor: isValid ? '#ccc' : enteredValue.length === 0 ? '#ccc' : 'red'}}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseGaolInput;