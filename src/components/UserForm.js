import React, { useState } from 'react';
import Button from './Button';

import styles from "./UserForm.module.css";

const UserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isNumberValid, setIsNumberValid] = useState(true);


    const usernameHandler = event => {
        setIsUsernameValid(true);
        setEnteredUsername(event.target.value);
    }

    const numberHandler = event => {
        setIsNumberValid(true);
        setEnteredNumber(event.target.value);
    }

    const validateInput = () => {
        let isValid = true;
        if (enteredNumber.trim().length === 0) {
            isValid = false;
            setIsNumberValid(false);
        }
        if (enteredUsername.trim().length === 0) {
            isValid = false;
            setIsUsernameValid(false);
        }
        return ((isValid) ? true : false);
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        if (!validateInput()) {return;}
        const newUser = {
            username: enteredUsername,
            age: enteredNumber,
            id: Math.random()
        }
        props.onSubmitHandler(newUser);
        setEnteredNumber('');
        setEnteredUsername('');
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles['form-control']}>
            <label className={!isUsernameValid && styles.invalid} >Username</label>
            <input className={!isUsernameValid && styles.invalid} type="text" name="username" value={enteredUsername} onChange={usernameHandler}></input>
            <label className={!isNumberValid && styles.invalid} >Age (Years)</label>
            <input className={!isNumberValid && styles.invalid} type="number" name="age" value={enteredNumber} onChange={numberHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default UserForm;