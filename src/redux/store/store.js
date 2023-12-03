import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../reducers/todo/slice.js";

export const store = configureStore({
    reducer: {
        todoReducer,
    }
});