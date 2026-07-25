import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "../redux/commentSlice/commentSlice.tsx";
import {userSlice} from "../redux/userSlice/userSlice.tsx";
import {postSlice} from "../redux/postSlice/postSlice.tsx";


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice:commentSlice.reducer
    }
});