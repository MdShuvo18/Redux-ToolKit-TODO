import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Assign the todo slice reducer
    },
});

export default store;
