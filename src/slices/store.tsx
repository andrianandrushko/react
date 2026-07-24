import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "../redux/commentSlice/commentSlice.tsx";


export const store = configureStore({
    reducer: {
        commentSlice:commentSlice.reducer
    }
});