import type {IUsers} from "../../models/IUsers.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {commentSliceActions} from "../commentSlice/commentSlice.tsx";
// створює тип який описує користувачів
type userSliceType = {
    users:IUsers[],
    user:IUsers | null,
    loadState:boolean
}
// об'єкт який характеризує початковий стан
const initialState: userSliceType = {users:[], user:null, loadState:false}

// створення змінної за рахунок функції createAsyncThunk
const loadUsers = createAsyncThunk(
    // функція приймає два аргументи перший назва, назва самої функції
    'userSlice/loadUsers',
    // другий аргумент створює асинхрону колбек функцію
    async(_, thunkAPI) => {
        try {
            // запит API користувачів
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
            thunkAPI.dispatch(commentSliceActions.changeLoadState(true))

            // повертаємо користувачів через аргумент thunkAPI
            return thunkAPI.fulfillWithValue(users)
            // якшо помилка
        }catch(err) {
            // виводмо в консоль помилку
            console.error(err)
                // повертаємо помилку ерез аргумент thunkAPI в якій буде писати something went wrong
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

// формуєм userSlice через метод createSlice
export const userSlice = createSlice({
    // назва об'єкта
    name:'userSlice',
    // початковий стан об'єкта
    initialState:initialState,
    reducers:{
        changeLoadState: (state,action:PayloadAction<boolean>) => {
            state.loadState = action.payload
        }
    },
    // обробка асинхронних станів завантаження користувачів
    extraReducers:builder => {
        builder
            .addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUsers[]>)=>{
                state.users = action.payload
            })
            .addCase(loadUsers.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
            .addMatcher(isFulfilled(loadUsers),(state)=>{
                state.loadState = true
            })
            .addMatcher(isRejected(loadUsers),(state)=>{
                console.log(state)
            })
    }
})
// об'єднання синхронних actions
export const userSliceActions = {
    ...userSlice.actions,
    loadUsers,
}