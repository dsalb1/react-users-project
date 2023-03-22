import React, { useState, useRef } from 'react';

import Button from './Button';
import Modal from './Modal';

import styles from "./UserForm.module.css";

const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [displayModal, setDisplayModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const modalHeading = "Invalid input";

    const closeModalHandler = () => {
        setDisplayModal(false);
        setErrorMessage('');
    }

    const validateInput = (name, age) => {
        /* returns true if input is valid, false if invalid */
        if (name.trim().length === 0 || age.trim().length === 0) {
            setDisplayModal(true);
            setErrorMessage('Please enter a valid name and age (non-empty values).');
            return false;
        } else if (+age.value < 0) {
            setDisplayModal(true);
            setErrorMessage('Please enter a valid age (> 0).');
            return false;
        }
        return true;
    }

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (!validateInput(enteredName, enteredUserAge)) {return;}
        const newUser = {
            username: enteredName,
            age: enteredUserAge,
            id: Math.random().toString()
        }
        props.onSubmitHandler(newUser);
        ageInputRef.current.value = '';
        nameInputRef.current.value = '';
    }

    return (
        <>
            <form onSubmit={addUserHandler} className={styles['form-control']}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" ref={nameInputRef}></input>
                <label htmlFor="age">Age (Years)</label>
                <input type="age" name="age" ref={ageInputRef}></input>
                <Button type="submit">Add User</Button>
            </form>
            <Modal
                heading={modalHeading}
                display={displayModal}
                onClick={closeModalHandler}
                error={errorMessage}
            />
        </>
    )
}

export default UserForm;