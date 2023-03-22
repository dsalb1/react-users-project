import React, { useState } from 'react';
import Button from './Button';

import styles from "./UserForm.module.css";

const UserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');

    const usernameHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const numberHandler = event => {
        setEnteredNumber(event.target.value);
    }

    const onSubmitHandler = event => {
        event.preventDefault();
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
            <label>Username</label>
            <input type="text" name="username" value={enteredUsername} onChange={usernameHandler}></input>
            <label>Age (Years)</label>
            <input type="number" name="age" value={enteredNumber} onChange={numberHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default UserForm;