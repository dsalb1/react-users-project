import React, { useState } from 'react';

import Button from './Button';
import Modal from './Modal';

import styles from "./UserForm.module.css";

const UserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const modalHeading = "Invalid input";

    const usernameHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const numberHandler = event => {
        setEnteredNumber(event.target.value);
    }

    const closeModalHandler = () => {
        setDisplayModal(false);
        setErrorMessage('');
    }

    const validateInput = () => {
        /* returns true if input is valid, false if invalid */
        if (enteredNumber.trim().length === 0 || enteredUsername.trim().length === 0) {
            setDisplayModal(true);
            setErrorMessage('Please enter a valid name and age (non-empty values).');
            return false;
        } else if (+enteredNumber < 0) {
            setDisplayModal(true);
            setErrorMessage('Please enter a valid age (> 0).');
            return false;
        }
        return true;
    }

    const addUserHandler = event => {
        event.preventDefault();
        if (!validateInput()) {return;}
        const newUser = {
            username: enteredUsername,
            age: enteredNumber,
            id: Math.random().toString()
        }
        props.onSubmitHandler(newUser);
        setEnteredNumber('');
        setEnteredUsername('');
    }

    return (
        <div>
            <form onSubmit={addUserHandler} className={styles['form-control']}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={enteredUsername} onChange={usernameHandler}></input>
                <label htmlFor="number">Age (Years)</label>
                <input type="number" name="age" value={enteredNumber} onChange={numberHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
            <Modal
                heading={modalHeading}
                display={displayModal}
                onClick={closeModalHandler}
                error={errorMessage}
            />
        </div>
    )
}

export default UserForm;