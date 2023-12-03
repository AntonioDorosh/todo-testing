import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// creating async thunk for getting todos from server

export const fetchTodosAsync = createAsyncThunk(
    'todos/fetchTodosAsync',
    async(_, thunkApi) => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=50');
          
          return await response.json()
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
);

// creating slice for todo reducer

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        // add function for adding new todo
        addTodo: (state, action) => {
            const newTask = {
                id: state.length + 1,
                title: action.payload,
                isDone: false
            };

            state.unshift(newTask)
        },
        // removing our todos from state
        removeTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);

            if (index !== - 1) {
                state.splice(index, 1)
            }
        },
        // setting our todos status
        toggleStatus: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);

            if (todo) {
                todo.isDone = !todo.isDone
            }
        },
        // editing our todos
        editTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload.id);

            if (todo) {
                todo.title = action.payload.title
            }
        },
    },
    // adding extra reducers for fetching todos from server
    extraReducers:(builder) =>  {
        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
});


export const {addTodo, removeTodo, editTodo, toggleStatus} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;