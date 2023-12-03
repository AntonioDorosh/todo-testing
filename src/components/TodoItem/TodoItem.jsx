import React, {useState} from 'react';
import styles from './TodoItem.module.css'
import {useDispatch} from "react-redux";
import {
    editTodo,
    removeTodo,
    toggleStatus
} from "../../redux/reducers/todo/slice.js";

const TodoItem = (props) => {
    const {title, isDone, id} = props;
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState('');

    const handlerRemove = (id) => dispatch(removeTodo(id));

    const isCheckedHandler = (id) => dispatch(toggleStatus(id));

    const toggleForm = () => {
        setIsEdit(!isEdit);
        setEditText(title);
    }

    const handleUpdateTodo = () => {
        dispatch(editTodo({
            id,
            title: editText
        }))
        toggleForm();
        setEditText('')
    }

    return (
        <>
            {isEdit ? (
                <li className={styles.list__items}>
                    <input
                        className={styles.item__input}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <nav className={styles.nav__buttons}>
                        <button
                            className={styles.button}
                            onClick={handleUpdateTodo}
                        >
                            Update
                        </button>
                        <button className={styles.button}
                                onClick={toggleForm}>cancel
                        </button>
                    </nav>
                </li>
            ) : (
                <li className={styles.list__items}>
                    <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => isCheckedHandler(id)}
                    />
                    <span className={styles.item__text} style={{
                        textDecoration: isDone ? 'line-through' : 'none'
                    }}>{title}</span>
                    <nav className={styles.nav__buttons}>
                        <button
                            className={styles.button}
                            onClick={() => handlerRemove(id)}
                        >
                            Delete
                        </button>
                        <button
                            className={styles.button}
                            onClick={toggleForm}
                        >
                            Edit
                        </button>
                    </nav>

                </li>
            )}
        </>
    );
};

export default TodoItem;