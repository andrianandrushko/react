import type {UserComponent} from "../models/UserComponent.ts";

const baseurl = 'https://dummyjson.com/users'

export const getUsers = async ():Promise<UserComponent[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}