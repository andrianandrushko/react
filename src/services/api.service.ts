import type {IUsers} from "../models/IUsers.ts";
import type {IUser} from "../models/IUser.dummy.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const baseJson = 'https://dummyjson.com/users';

export const getUsers = async ():Promise<IUsers[]> =>{

    return await fetch(baseUrl)
        .then(value => value.json())

}

export const getUser = async (): Promise<IUser[]> => {
    const response = await fetch(baseJson);
    const data = await response.json();

    return data.users;
}