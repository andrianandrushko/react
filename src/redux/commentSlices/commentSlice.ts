import type {IComments} from "../../models/IComments.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type commentSliceType ={
    comments:IComments[]
    comment:IComments | null
    loadState: boolean
}

const initialState: commentSliceType = {comments:[], comment:null, loadState: false};

const loadComments = createAsyncThunk(
    'commentSlices/loadComments',
    async(_, thunkAPI) => {
        try {
            const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.json())

            return comments;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('something went wrong')
        }
    })

export const commentSlice = createSlice({
    name:'commentSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers:builder => {
        builder
            .addCase(loadComments.fulfilled,(state, action)=>{
                state.comments = action.payload
            })
            .addCase(loadComments.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
    }
})

export const commentSliceActions = {
    ...commentSlice.actions,
    loadComments,
}







