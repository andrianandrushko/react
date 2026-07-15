import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import HomePage from "../Pages/HomePage.tsx";
import LoginPage from "../Pages/LoginPage.tsx";
import AuthResourcesPage from "../Pages/AuthResourcesPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import TodosPage from "../Pages/TodosPage.tsx";
import QuotesPage from "../Pages/QuotesPage.tsx";

// маршрути застосунку
export const router = createBrowserRouter([
    {
        // всі маршрути будуть вкладені в Layout
        path:'/', element:<Layout/>, children:[

            // головна сторінка
            {index:true, element:<HomePage/>},

            // сторінка виводу токенів
            {path:'login', element:<LoginPage/>},

            // сторінка виводу продуктів
            {path:'/auth/resources', element:<AuthResourcesPage/>},

            // сторінка виводу постів
            {path:'/posts', element:<PostsPage/>},

            // сторінка виводу коментарів
            {path:'/comments', element:<CommentsPage/>},

            // сторінка виводу задач
            {path:'/todos', element:<TodosPage/>},

            // сторінка виводу цитат
            {path:'/quotes', element:<QuotesPage/>}
        ]},
]);