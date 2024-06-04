import React, {useRef} from 'react';
import classes from './JoinInput.module.css';

const JoinInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = React.useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (nameInputRef.current.value === '' || enteredName.trim().length === 0) {
            console.error("input값 : ",enteredName);
        } else {
            // submit 한 결과 값 전달
            console.log("enteredName", enteredName);
        }
    }

    let flag = props.join;
    console.log("회원가입 버튼 누름 !", flag);
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={classes.formControl}>
                <label htmlFor='userName'>사용자 이름</label>
                <input type='text' id='username' ref={nameInputRef} value={enteredName}
                        onChange={(event) => setEnteredName(event.target.value)}/>
            </div>
            <div className={classes.formActions}>
                <button className={classes.btn}>제출</button>
            </div>
        </form>
    );
};

export default JoinInput;