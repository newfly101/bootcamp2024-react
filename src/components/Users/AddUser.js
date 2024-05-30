import React, {useRef, useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        console.log("nameInputRef", nameInputRef.current.value);
        console.log("ageInputRef", ageInputRef.current.value);

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: '유효하지 않은 입력값',
                message: '유효한 나이와 이름을 입력하세요 (비어 있지 않은 값).',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: '유효하지 않은 나이',
                message: '유효한 나이 값을 입력하세요 (> 0).',
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };
    //
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">사용자명</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">나이</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">사용자 추가</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;