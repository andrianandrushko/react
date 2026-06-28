import type {IUsers} from "../models/IUsers.ts";

const usersUrl = 'https://dummyjson.com/users';


export const getUsers = async (pg:string):Promise<IUsers[]> =>{
    const limit = 10;
    const skip = (+pg - 1) * limit;

    const response = await fetch(`${usersUrl}?limit=${limit}&skip=${skip}`);
    const data = await response.json()

    return data.users;
}


