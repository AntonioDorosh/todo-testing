import React, {useEffect, useState} from 'react';
import TodoHeader from "../TodoHeader/TodoHeader.jsx";
import TodoList from "../TodoList/TodoList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodosAsync} from "../../redux/reducers/todo/slice.js";
import Input from "../UI/Input/Input.jsx";
import Pagination from "../UI/Pagination/Pagination.jsx";

const Todo = () => {
    const todos = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage] = useState(5);

    useEffect(() => {
        dispatch(fetchTodosAsync())
    }, [dispatch]);
    
    const todosCurrent = Math.ceil(todos.length / limitPerPage);
    const indexOfLastTodo = currentPage * limitPerPage;
    const indexOfFirstTodo = indexOfLastTodo - limitPerPage;
    const currentTodos = Array.isArray(todos) ? todos.slice(indexOfFirstTodo, indexOfLastTodo) : [];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <TodoHeader todos={todos}/>
            <Input/>
            <TodoList todos={currentTodos}/>
            <Pagination
                paginate={paginate}
                todosCurrent={todosCurrent}
                currentPage={currentPage}
            />
        </>
    );
};

export default Todo;