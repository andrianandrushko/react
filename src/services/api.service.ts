import type {IComments} from "../models/IComments.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/comments';

export const getUsers = async ():Promise<IComments[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}