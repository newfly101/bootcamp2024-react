import React, {useEffect, useReducer, useState} from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';

const emailReducer = (state, action) => {

}

const passwordReducer = (state, action) => {

}

const Login = (props) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        // email의 초기값 세팅
        value : '',
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value : '',
        isValid: null,
    });
    const [formIsValid, setFormIsValid] = useState(false);

    // 중복된 setFormIsValid를 useEffect를 이용해서 해당 값이 변경될 때 check하도록 함
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("check validity");
            setFormIsValid(
                emailState.value.includes('@') && passwordState.value.trim().length > 6
            );
        }, 500);
        // cleanUp function
        return () => {
            console.log("clean up");
            clearTimeout(identifier);
        }
        console.log("length passwordState.value : ", passwordState.value.trim().length);
    }, [emailState.value, passwordState.value]);

    const emailChangeHandler = (event) => {
        // setemailState.value(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        // setpasswordState.value(event.target.value);
    };

    const validateEmailHandler = () => {
        // setemailState.isValid(emailState.value.includes('@'));
    };

    const validatePasswordHandler = () => {
        // setpasswordState.isValid(passwordState.value.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        로그인
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;