import type {IPosts} from "../../models/IPosts.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
// стврюємо тип який описує пости
type postSliceType = {
    posts:IPosts[],
    post:IPosts | null,
    loadState:boolean,
}
// об'єкт який характеризує початковий стан
const initialState: postSliceType = {posts:[], post:null, loadState:false}
// створення змінної за рахунок функціїї createAsyncThunk
const loadPosts = createAsyncThunk(
    // функція приймає два аргументи перший назва, назва самої функції
    'postSlice/loadPosts',
    // другий аргумент створуює асинхрону колбек функцію
    async(_, thunkAPI) =>{
        try {
            // запит API постів
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())

            // повертаємо постів через аргумент thunkAPI
            return thunkAPI.fulfillWithValue(posts)
            // якшо помилка
        }catch(err){
            // виводмо в консоль помилку
            console.log(err)
            // повертаємо помилку ерез аргумент thunkAPI в якій буде писати something went wrong
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)
// формуєм userSlice через метод createSlice
export const postSlice = createSlice({
    // назва об'єкта
    name:'postSlice',
    // початковий стан об'єкта
    initialState:initialState,
    reducers:{
        changeLoadState: (state,action:PayloadAction<boolean>) => {
            state.loadState = action.payload
        }
    },
    // обробка асинхронних станів завантаження постів
    extraReducers:builder => {
        builder
            .addCase(loadPosts.fulfilled,(state, action:PayloadAction<IPosts[]>)=>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
            .addMatcher(isFulfilled(loadPosts),(state)=>{
                state.loadState = true
            })
            .addMatcher(isRejected(loadPosts),(state)=>{
                console.log(state)
            })
    }
})

// об'єднання синхронних actions
export const postSliceActions = {
    ...postSlice.actions,
    loadPosts
}