import React, {useState} from 'react';
import styles from './Input.module.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../../redux/reducers/todo/slice.js";

const Input = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onChangeHandler = (event) => setValue(event.target.value);

    const handleAddTodo = (event) => {
        event.preventDefault();

        if (value.trim()) {
            dispatch(addTodo(value))
            setValue('');
        }
    };


    return (
        <form onSubmit={handleAddTodo} className={styles.form}>
            <input className={styles.input} type="text" value={value}
                   onChange={onChangeHandler}/>
            <button type={'submit'} className={styles.input__button}>Add
            </button>
        </form>
    );
};

export default Input;