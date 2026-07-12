import type {ITodo} from "../models/TodoComponent.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/todos'

export const getTodos = async ():Promise<ITodo[]> =>{
    return await fetch(baseurl)
        .then(value => value.json())

}