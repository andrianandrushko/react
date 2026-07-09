import type {IComments} from "../models/IComments.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/comments';

export const getComments = async ():Promise<IComments[]> =>{
    return await fetch(baseurl)
        .then(value => value.json())

}