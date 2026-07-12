import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import UsersPage from "../Pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>, children:[
            {path:'/users/dummyjson', element:<UsersPage/>},
            {path:'/posts/dummyjson', element:<PostsPage/>}
        ]}

])