import type {IRecipe} from "../../models/IRecipe.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

type recipeSliceType = {
    recipes:IRecipe[],
    recipe:IRecipe | null,
    loadState: boolean
}

const initialState: recipeSliceType = {recipes:[], recipe:null, loadState:false}

const loadRecipe = createAsyncThunk(
    'recipeSlice/loadRecipe',
    async(_, thunkAPI) => {
        try {
            const data = await fetch('https://dummyjson.com/recipes')
                .then(res => res.json())
            return data.recipes
        }catch(error) {
            console.log(error)
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

export const recipeSlice = createSlice({
    name:'recipeSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers:builder => {
        builder
            .addCase(loadRecipe.fulfilled,(state, action:PayloadAction<IRecipe[]>)=>{
                state.recipes = action.payload
            })
            .addCase(loadRecipe.rejected,(state, action)=>{
                console.log(state)
                console.log(action)
            })
    }
})

export const recipeSliceActions = {
    ...recipeSlice.actions,
    loadRecipe
}