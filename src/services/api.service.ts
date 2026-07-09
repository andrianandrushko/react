import type {IProducts} from "../models/IProducts.ts";

const baseUrl = 'https://dummyjson.com/products';

export const getProducts = async (): Promise<IProducts[]> => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data.products;
};