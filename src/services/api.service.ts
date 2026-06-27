import type {IUsers} from "../models/IUsers.ts";

const usersUrl = 'https://dummyjson.com/users';


export const getUsers = async (pg:string):Promise<IUsers[]> =>{
    const response = await fetch(`${usersUrl}?page=${pg}`)
    const data = await response.json()

    return data.users;
}


