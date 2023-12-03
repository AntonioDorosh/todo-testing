import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from "../TodoItem/TodoItem.jsx";

const TodoList = ({todos}) => {

    return (
        <ul className={styles.ul}>
            {todos?.map((todo) => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    );
};

export default TodoList;