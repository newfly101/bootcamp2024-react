import React, {useState} from 'react';
import Button from "../UI/Button/Button";

const CourseGaolInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isVaild, setIsVaild] = useState(true);
    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length === 0) {
            setIsVaild(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsVaild(false);
            return;
        }
        props.onAddGoal(enteredValue);

    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>목표</label>
                <input type="text" onChange={goalInputChangeHandler}
                       style={{backgroundColor: isVaild ? "transparent" : 'red',
                               borderColor: isVaild ? '#ccc' : 'red'}}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseGaolInput;