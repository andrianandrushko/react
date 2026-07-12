import type {IUsers} from "../models/IUsers.ts";
import type {ICarts} from "../models/ICarts.ts";

const usersUrl = 'https://dummyjson.com/users';
const baseUrl = 'https://dummyjson.com/carts/user';

export const getUsers = async ():Promise<IUsers[]> =>{
    const response = await fetch(usersUrl)
    const data = await response.json()

    return data.users;
}

export const getUserCarts = async (id:number):Promise<ICarts[]> =>{
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();

    return data.carts;
}


