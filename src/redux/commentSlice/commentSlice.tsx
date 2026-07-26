import type {IComments} from "../../models/IComments.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
// створюємо тип який описує коментарі
type commentSliceType = {
    comments:IComments[]
    comment: IComments | null;
    loadState: boolean;
}
// об'єкт який характеризує початковий стан
const initialState:commentSliceType = {comments:[], comment:null, loadState:false};

// створення змінної за рахунок функції createAsyncThunk
const loadComments = createAsyncThunk(
    // функція приймає два аргументи перший назва, назва самої функції
    'commentSlice, loadComments',
    // другий аргумент який створює асинхрону колбек функцію
    async (_, thunkAPI) => {
        try {
            // запит API коментарів
            const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.json())
            thunkAPI.dispatch(commentSliceActions.changeLoadState(true))

            // повертаємо користувачів через аргумент thunkAPI
            return thunkAPI.fulfillWithValue(comments)
                // якшо помилка
        }catch (error){
            // виводимо в консоль помилку
            console.log(error)
            // повертаємо помилку ерез аргумент thunkAPI в якій буде писати something went wrong
            return thunkAPI.rejectWithValue('something went wrong')
        }
    })
// формуєм userSlice через метод createSlice
export const commentSlice = createSlice({
    // назва об'єкта
    name:'commentSlice',
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
// об'єднання синхронних actions
export const commentSliceActions = {
    ...commentSlice.actions,
    loadComments
}