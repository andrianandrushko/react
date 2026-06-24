import type {ITodos} from "../models/ITodos.ts";

const baseurl = 'https://dummyjson.com/todos'

export const getUsers = async ():Promise<ITodos[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}