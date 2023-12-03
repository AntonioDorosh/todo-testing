import React from 'react';
import styles from './TodoHeader.module.css';

const TodoHeader = ({todos}) => {

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>React Todo App</h1>
            <span className={styles.header__total}>Total Todos: {todos?.length}</span>
        </header>
    );
};

export default TodoHeader;