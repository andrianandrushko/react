import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "../redux/postSlices/postSlice.ts";
import {commentSlice} from "../redux/commentSlices/commentSlice.ts";

export const store = configureStore({
    reducer: {
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
})