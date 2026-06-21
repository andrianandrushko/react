import type {PostComponent} from "../models/PostComponent.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/posts'

export const getUsers = async ():Promise<PostComponent[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}