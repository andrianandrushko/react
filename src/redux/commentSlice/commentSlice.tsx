import type {IComments} from "../../models/IComments.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";

type commentSliceType = {
    comments:IComments[]
    comment: IComments | null;
    loadState: boolean;
}

const initialState:commentSliceType = {comments:[], comment:null, loadState:false};

const loadComments = createAsyncThunk(
    'commentSlice, loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.json())
            thunkAPI.dispatch(commentSliceActions.changeLoadState(true))

            return thunkAPI.fulfillWithValue(comments)
        }catch (error){
            console.log(error)
            return thunkAPI.rejectWithValue('something went wrong')
        }
    })

export const commentSlice = createSlice({
    name:'commentSlice',
    initialState:initialState,
    reducers:{
        changeLoadState: (state,action:PayloadAction<boolean>) => {
            state.loadState = action.payload
        }
    },
    extraReducers:builder => {
        builder
            .addCase(loadComments.fulfilled,(state, action:PayloadAction<IComments[]>)=>{
                state.comments = action.payload
            })
            .addCase(loadComments.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
            .addMatcher(isFulfilled(loadComments),(state)=>{
                state.loadState = true
            })
            .addMatcher(isRejected(loadComments),(state)=>{
                console.log(state)
            })
    }
})

export const commentSliceActions = {
    ...commentSlice.actions,
    loadComments
}