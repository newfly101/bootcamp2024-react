import React, {useContext, useEffect, useReducer, useRef, useState} from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';
import AuthContext from "../../context/AuthContext";
import authContext from "../../context/AuthContext";
import Input from "../../Input/Input";

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

const Login = () => {
    const context = useContext(AuthContext);
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

    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // 중복된 setFormIsValid를 useEffect를 이용해서 해당 값이 변경될 때 check하도록 함
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("check validity");
            setFormIsValid(
                emailState.value.includes('@') && passwordState.value.trim().length > 6
            );
        }, 500);
        // console.log(emailState, passwordState);
        // console.log("formIsValid",formIsValid);
        return () => {
            console.log("clean up");
            clearTimeout(identifier);
        }
    }, [emailState.value, passwordState.value]);

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
        console.log("formIsValid : ",formIsValid);
        if (formIsValid) {
            context.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            // 이메일 창에 focus
            emailInputRef.current.focus();
        } else if (!passwordIsValid) {
            // passord창에 focus
            passwordInputRef.current.focus();
        }

    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    isValid={emailState.isValid}
                    type="email"
                    label="이메일"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    ref={emailInputRef}
                />
                <Input
                    isValid={passwordState.isValid}
                    type="password"
                    label="비밀번호"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    ref={passwordInputRef}
                />
                <div className={classes.actions}>
                    {/*<Button type="submit" className={classes.btn} disabled={!formIsValid}>*/}
                    <Button type="submit" className={classes.btn}>
                        로그인
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;