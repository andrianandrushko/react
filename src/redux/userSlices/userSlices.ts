import type {IUsers} from "../../models/IUsers.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type userSliceType = {
    users:IUsers[]
    user:IUsers | null;
    loadState:boolean;
}

const initialState: userSliceType = {users:[],user:null, loadState:false};

const loadUsers = createAsyncThunk(
    'userSlices/loadUsers',
    async(_ , thunkAPI) =>{
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())

            return users;
        }catch (error){
            console.log(error);
            return thunkAPI.rejectWithValue('something went wrong.');
        }
    }
)

export const userSlice = createSlice({
    name:'userSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers:builder => {
        builder
            .addCase(loadUsers.fulfilled,(state, action) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected,(state, action) => {
                console.log(state)
                console.log(action)
            })
    }
})

export const userSliceActions = {
    ...userSlice.actions,
    loadUsers,
}