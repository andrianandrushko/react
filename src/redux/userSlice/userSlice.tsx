import type {IUsers} from "../../models/IUsers.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

type userSliceType = {
    users:IUsers[],
    user:IUsers | null,
    loadState:boolean
}

const initialState: userSliceType = {users:[], user:null, loadState:false}


const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async(_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())

            return thunkAPI.fulfillWithValue(users)
        }catch(err) {
            console.error(err)
            return thunkAPI.rejectWithValue('something went wrong')
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
            .addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUsers[]>)=>{
                state.users = action.payload
            })
            .addCase(loadUsers.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
    }
})

export const userSliceActions = {
    ...userSlice.actions,
    loadUsers,
}