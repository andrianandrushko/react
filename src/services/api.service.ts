import type {IUsers} from "../Users-models/IUsers.ts";

const usersUrl = 'https://dummyjson.com/users';


export const getUsers = async ():Promise<IUsers[]> =>{
    const response = await fetch(usersUrl)
    const data = await response.json()

    return data.users;
}


