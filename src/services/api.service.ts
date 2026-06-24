import type {IPosts} from "../models/IPosts.ts";

const baseUrl = 'https://dummyjson.com/posts';

export const getPosts = async (): Promise<IPosts[]> => {

    const response = await fetch(baseUrl);

    const data = await response.json();

    return data.posts;
};