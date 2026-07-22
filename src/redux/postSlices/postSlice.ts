import type {IPosts} from "../../models/IPosts.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

type postSliceType = {
    posts:IPosts[]
    post:IPosts | null
    loadState:boolean
}

const initialState: postSliceType = {posts:[],post:null, loadState:false}


const loadPosts = createAsyncThunk(
'postSlices/loadPosts',
    async(_, thunkAPI) =>{
        try {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())

           return posts;
    }catch (error){
            console.log(error)
            return thunkAPI.rejectWithValue('something went wrong')
        }
}
)

export const postSlice = createSlice({
    name:'postSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers:builder => {
        builder
            .addCase(loadPosts.fulfilled,(state, action:PayloadAction<IPosts[]>)=>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
    }
})
export const postSliceActions = {
    ...postSlice.actions,
    loadPosts
}