import type {IUsers} from "../models/IUsers.ts";
import type {IUser} from "../models/IUser.dummy.ts";
import type {IPosts} from '../models/IPosts.ts';
import type {IPostDummy} from "../models/IPost.dummy.ts";
import type {IComments} from "../models/IComments.ts";
import type {ICommentsDummy} from "../models/IComments.dummy.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const baseJson = 'https://dummyjson.com/users';

const postsJson = 'https://jsonplaceholder.typicode.com/posts';

const postsDummy =  'https://dummyjson.com/posts'

const commentsJson = 'https://jsonplaceholder.typicode.com/comments'

const commentsDummy =  'https://dummyjson.com/comments'

export const getUsers = async ():Promise<IUsers[]> =>{

    return await fetch(baseUrl)
        .then(value => value.json())

}

export const getUser = async (): Promise<IUser[]> => {
    const response = await fetch(baseJson);
    const data = await response.json();

    return data.users;
}


export const getPosts = async (): Promise<IPosts[]> =>{
    const response = await fetch(postsJson);
    const data = await response.json();

    return data;
}

export const getPost = async (): Promise<IPostDummy[]> =>{
    const response = await fetch(postsDummy);
    const data = await response.json();

    return data.posts;
}

export const getComments = async (): Promise<IComments[]> =>{
    const response = await fetch(commentsJson);
    const data = await response.json();
    return data;
}

export const getComment = async (): Promise<ICommentsDummy[]> =>{
    const response = await fetch(commentsDummy);
    const data = await response.json();
    return data.comments;
}