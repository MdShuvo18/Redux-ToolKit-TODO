import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk("posts/fetchPosts", async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json(); // Parse JSON data
        return data; // Return the parsed data
    } catch (error) {
        console.error({ message: error.message });
        throw error; // Throw the error to trigger the `rejected` state
    }
});

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload; // Store the posts
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message; // Store the error message
            });
    },
});

export default postSlice.reducer;
