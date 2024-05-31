import React, {useContext, useEffect, useReducer, useState} from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';
import AuthContext from "../../context/AuthContext";

const emailReducer = (state, action) => {
    // 값이 바뀌는 경우 setEnteredEmail
    if (action.type === 'USER_INPUT') {
        console.log("email", state, action);
        return {
            value: action.value,
            isValid: action.value.includes('@') && action.value.trim().length > 0,
        }
    }
    // 유효성 검사를 해야 하는 경우, setEmailIsValid
    if(action.type === 'INPUT_BLUR') {
        console.log("email", state, action);
        return {
            value: state.value,
            isValid: state.value.includes('@') && state.value.trim().length > 0,
        }
    }
    return {
        value: '',
        isValid: null
    }
}

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        console.log("password", state, action);
        return {
            value: action.value,
            isValid: action.value.trim().length > 6,
        }
    }
    // 유효성 검사를 해야 하는 경우, setPasswordIsValid
    if(action.type === "INPUT_BLUR") {
        console.log("password", state, action);
        return {
            value: state.value,
            isValid: state.value.trim().length > 6,
        }
    }
    return {
        value: '',
        isValid: null
    }
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

    const context = useContext(AuthContext);

    // 중복된 setFormIsValid를 useEffect를 이용해서 해당 값이 변경될 때 check하도록 함
    // useEffect(() => {
    //     const identifier = setTimeout(() => {
    //         console.log("check validity");
    //         setFormIsValid(
    //             emailState.value.includes('@') && passwordState.value.trim().length > 6
    //         );
    //     }, 500);
    //     // cleanUp function
    //
    //     console.log(emailState, passwordState);
    //     console.log("formIsValid",formIsValid);
    //     return () => {
    //         console.log("clean up");
    //         clearTimeout(identifier);
    //     }
    // }, [emailState.value, passwordState.value]);

    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        }
    }, []);

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value});

        setFormIsValid(
            emailState.isValid && passwordState.isValid
        );
        // validateEmailHandler();
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});

        setFormIsValid(
            emailState.isValid && passwordState.isValid
        );

        // validatePasswordHandler();
    };

    const validateEmailHandler = () => {
        console.log("emailState : ", emailState);
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        console.log("passwordState : ", passwordState);
        dispatchPassword({type: 'INPUT_BLUR'});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("formIsValid : ",formIsValid)
        context.onLogin(emailState.value, passwordState.value);
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