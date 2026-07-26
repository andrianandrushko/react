import type {IRecipe} from "../../models/IRecipe.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
// створюємо тип який описує рецепт
type recipeSliceType = {
    recipes:IRecipe[],
    recipe:IRecipe | null,
    loadState: boolean
}
// об'єкт який характеризує початковий стан
const initialState: recipeSliceType = {recipes:[], recipe:null, loadState:false}
// створення змінної за рахунок функції createAsyncThunk
const loadRecipe = createAsyncThunk(
    // функція приймає два аргументи перший назва, назва самої функції
    'recipeSlice/loadRecipe',
    // другий аргумент створює асинхрону колбек функцію
    async(_, thunkAPI) => {
        try {
            // запит API рецепт
            const data = await fetch('https://dummyjson.com/recipes')
                .then(res => res.json())
                // повертаємо рецепт
            return data.recipes
            // якшо помилка
        }catch(error) {
            // виводмо в консоль помилку
            console.log(error)
            // повертаємо помилку ерез аргумент thunkAPI в якій буде писати something went wrong
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)
// формуєм userSlice через метод createSlice
export const recipeSlice = createSlice({
    // назва об'єкта
    name:'recipeSlice',
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
            .addCase(loadRecipe.fulfilled,(state, action:PayloadAction<IRecipe[]>)=>{
                state.recipes = action.payload
            })
            .addCase(loadRecipe.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
            .addMatcher(isFulfilled(loadRecipe),(state)=>{
                state.loadState = true
            })
            .addMatcher(isRejected(loadRecipe),(state)=>{
                console.log(state)
            })
    }
})
// об'єднання синхронних actions
export const recipeSliceActions = {
    ...recipeSlice.actions,
    loadRecipe
}