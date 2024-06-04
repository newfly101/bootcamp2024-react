import React from 'react';
import classes from './JoinInput.module.css';

const JoinInput = (props) => {
    let flag = props.join;
    console.log("회원가입 버튼 누름 !", flag);
    return (
        <form>
            <div className={classes.formControl}>
                <label htmlFor='userName'>사용자 이름</label>
                <input type='text' id='username' />
            </div>
            <div className={classes.formActions}>
                <button>제출</button>
            </div>
        </form>
    );
};

export default JoinInput;