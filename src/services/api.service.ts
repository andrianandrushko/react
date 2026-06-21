import type {ProductComponent} from "../models/ProductComponent.ts";

const baseurl = 'https://dummyjson.com/products'

export const getUsers = async ():Promise<ProductComponent[]> =>{

    return await fetch(baseurl)
        .then(value => value.json())

}