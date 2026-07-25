import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "../redux/commentSlice/commentSlice.tsx";
import {userSlice} from "../redux/userSlice/userSlice.tsx";


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        commentSlice:commentSlice.reducer
    }
});