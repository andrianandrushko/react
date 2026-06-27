import type {ITodos} from "../models/ITodos.ts";

const baseurl = 'https://dummyjson.com/todos'

export const getTodos = async ():Promise<ITodos[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}