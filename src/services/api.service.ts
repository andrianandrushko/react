import type {IPost} from "../models/IPost.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = async ():Promise<IPost[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}