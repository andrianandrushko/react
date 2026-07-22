import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "../redux/postSlices/postSlice.ts";
import {commentSlice} from "../redux/commentSlices/commentSlice.ts";
import {userSlice} from "../redux/userSlices/userSlices.ts";

export const store = configureStore({
    reducer: {
        userSlice:userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
})