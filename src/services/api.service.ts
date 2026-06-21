import type {TodoComponent} from "../models/TodoComponent.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/todos'

export const getUsers = async ():Promise<TodoComponent[]> =>{
    return await fetch(baseurl)
        .then(value => value.json())

}