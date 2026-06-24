import type {IComments} from "../models/IComments.ts";

const baseUrl = 'https://dummyjson.com/comments';

export const getComments = async (): Promise<IComments[]> => {

    const response = await fetch(baseUrl);

    const data = await response.json();

    return data.comments;
};