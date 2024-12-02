import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import postReducer from "../features/posts/postSlice"

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        posts: postReducer // Assign the todo slice reducer
    },
});

export default store;
