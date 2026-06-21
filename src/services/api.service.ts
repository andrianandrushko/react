import type {CommentComponent} from "../models/CommentComponent.ts";

const baseurl = 'https://jsonplaceholder.typicode.com/comments'

export const getUsers = async ():Promise<CommentComponent[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}