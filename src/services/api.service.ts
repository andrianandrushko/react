import type {IUsers} from "../models/IUsers.ts";
import type {IPosts} from '../models/IPosts.ts';



const usersUrl = 'https://dummyjson.com/users?limit=30';

const postsUrl = 'https://dummyjson.com/posts?limit=30';

export const getUsers = async ():Promise<IUsers[]> =>{
    const response = await fetch(usersUrl)
    const data = await response.json()

    return data.users;

}

export const getPosts = async (): Promise<IPosts[]> =>{
    const response = await fetch(postsUrl);
    const data = await response.json();

    return data.posts;
}


