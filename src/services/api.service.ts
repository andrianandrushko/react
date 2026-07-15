import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {IPosts} from "../models/IPosts.ts";
import type {IPostsResponseModelType} from "../models/IPostsResponseModelType.ts";
import type {ICommentsResponseModelType} from "../models/ICommentsResponseModelType.ts";
import type {IComments} from "../models/IComments.ts";
import type {ITodos} from "../models/ITodos.ts";
import type {ITodosResponseModelType} from "../models/ITodosResponseModelType.ts";
import type {IQuotes} from "../models/IQuotes.ts";
import type {IQuotesResponseModelType} from "../models/IQuotesResponseModelType.ts";


// Створюємо окремий екземпляр axios
const axiosInstance = axios.create({
    // базова IP адреса
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})

// створюємо тип для даних логіну
type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

// Додаємо interceptor, який перехоплює кожен запит перед його відправкою
axiosInstance.interceptors.request.use((requestObject) => {
    // робимо перевірку чи метод запиту є GET
    if (requestObject.method?.toUpperCase() === "GET") {
        // якщо так, то додаємо до заголовків запиту Authorization з токеном користувача
        requestObject.headers.Authorization = "Bearer " + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    // повертаєм об'єкт запиту
    return requestObject;
})

// створюємо асинхрону функцію яка приймає об'єкт з username, password та expiresInMins і повертає Promise<IUserWithTokens>
export const login = async ({username,password,expiresInMins}:LoginData):Promise<IUserWithTokens> => {

    // виконуємо постовий запит та передаєм дані username, password та expiresInMins
    const {data:userWithToken} = await axiosInstance.post<IUserWithTokens>("/login", {
        username,
        password,
        expiresInMins
    });
    // виводимо в консоль отримані дані
    console.log(userWithToken);

    // зберігаємо в локальному сховищі в розділі application
    localStorage.setItem("user", JSON.stringify(userWithToken));

    // повертаємо отримані дані
    return userWithToken;
}
// створюємо асинхронну функцію яка повертає Promise<IProduct[]>
export const loadAuthProducts = async ():Promise<IProduct[]> => {
    // виконуємо постовий запит на /products та отримуємо дані типу IProductsResponseModelType
    const {data} = await axiosInstance.get<IProductsResponseModelType>("/products");
    // повертаємо отримані продукти
    return data.products;
}
// створюємо асинхрону функцію для оновлення токенів
export const refresh = async () => {

    // отримуємо з локального сховища об'єкт користувача з токенами
    const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user');
    // виконуємо постoвий запит на /refresh та отриуємо нові токени
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>("/refresh", {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    })
    // отримуємо оновлений accessToken
    iUserWithTokens.accessToken = accessToken;

    // отримуємо оновлений refreshToken
    iUserWithTokens.refreshToken = refreshToken;

    // зберігіємо новий користувача з оновленими токенами
    localStorage.setItem("user", JSON.stringify(iUserWithTokens));
}
// створюємо асинхрону функцію яка повертає Promise<IPosts[]>
export const  loadAuthPosts = async ():Promise<IPosts[]> => {
    // виконуємо запит на /posts та отримуємо дані типу IPostsResponseModelType
    const {data} = await axiosInstance.get<IPostsResponseModelType>("/posts");
    // повертаємо дані про пости
    return data.posts
}
// створюємо асинхрону функцію яка повертає Promise<IComments[]>
export const loadAuthComments = async ():Promise<IComments[]> => {
    // виконуємо запит на /comments та отримуємо дані типу ICommentsResponseModelType
    const {data} = await axiosInstance.get<ICommentsResponseModelType>("/comments");
    // повертаємо дані про коментарі
    return data.comments
}
// створюємо асинхрону функцію яка повертає Promise<ITodos[]>
export const  loadAuthTodos = async ():Promise<ITodos[]> => {
    // виконуємо запит на /todos та отримуємо дані типу ITodosResponseModelType
    const {data} = await axiosInstance.get<ITodosResponseModelType>("/todos");
    // повертаємо дані про задачі
    return data.todos;
}
// створюємо асинхрону функцію яка повертає Promise<IQuotes[]>
export const loadAuthQuotes = async ():Promise<IQuotes[]> => {
    // виконуємо запит на /quotes та отримуємо дані типу IQuotesResponseModelType
    const {data} = await axiosInstance.get<IQuotesResponseModelType>("/quotes");
    // повертаєм дані про цитати
    return data.quotes;
}




