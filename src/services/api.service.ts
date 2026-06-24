import type {IUsers} from "../models/IUsers.ts";

const baseurl = 'https://dummyjson.com/users'

export const getUsers = async ():Promise<IUsers[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}