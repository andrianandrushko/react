import type {IUsers} from "../../models/IUsers.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
// створює тип який описує користувачів
type userSliceType = {
    users:IUsers[],
    user:IUsers | null,
    loadState:boolean
}
// об'єкт який характеризує початковий стан
const initialState: userSliceType = {users:[], user:null, loadState:false}

// створення змінної за рахунок функціїї createAsyncThunk
const loadUsers = createAsyncThunk(
    // функція приймає два аргументи перший назва, назва самої функції
    'userSlice/loadUsers',
    // другий аргумент створуює асинхрону колбек функцію
    async(_, thunkAPI) => {
        try {
            // запит API користувачів
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())

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
    }
})
// об'єднання синхронних actions
export const userSliceActions = {
    ...userSlice.actions,
    loadUsers,
}