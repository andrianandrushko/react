import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "../redux/commentSlice/commentSlice.tsx";
import {userSlice} from "../redux/userSlice/userSlice.tsx";
import {postSlice} from "../redux/postSlice/postSlice.tsx";
import {recipeSlice} from "../redux/recipeSlice/recipeSlice.tsx";


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice:commentSlice.reducer,
        recipeSlice: recipeSlice.reducer,
    }
});