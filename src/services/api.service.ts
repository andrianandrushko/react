import type {ITodos} from "../models/ITodos.ts";

const baseurl = 'https://dummyjson.com/todos'

export const getTodos = async ():Promise<ITodos[]> =>{
        const response = await fetch(baseurl);
        const data = await response.json();
        return data.todos;
    };