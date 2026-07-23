import type {IComplex} from "../../models/IComplex.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

type complexSliceType = {
    complex: IComplex | null;
    loadState: boolean;
}

const initialState: complexSliceType = {complex:null, loadState:false}

const loadComplex = createAsyncThunk(
    'complexSlice,loadComplex',
    async(id:number, thunkAPI)=> {
        try {
            const users = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then(res => res.json());
            const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then(res => res.json());
            const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(res => res.json())

            return {users, posts, comments};

        }catch (error){
            console.log(error)
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })

export const complexSlice = createSlice({
    name:'complexSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers:builder => {
        builder
            .addCase(loadComplex.fulfilled,(state, action:PayloadAction<IComplex>)=>{
                state.complex = action.payload
            })
            .addCase(loadComplex.rejected,(state, action) =>{
                console.log(state)
                console.log(action)
            })
    }
})

export const complexSliceActions = {
    ...complexSlice.actions,
    loadComplex,
}