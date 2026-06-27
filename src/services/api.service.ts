import type {TodoComponent} from "../models/TodoComponent.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/todos'

export const getTodos = async ():Promise<TodoComponent[]> =>{
    return await fetch(baseurl)
        .then(value => value.json())

}