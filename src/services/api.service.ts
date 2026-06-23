import type {IPost} from "../models/IPost.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/posts'

export const getUsers = async ():Promise<IPost[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}