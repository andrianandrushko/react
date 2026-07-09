import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import PostsPage from "../Posts-Page/PostsPage.tsx";
import UsersPage from "../Users-Page/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>, children:[
            {path:'/users/dummyjson', element:<UsersPage/>},
            {path:'/posts/dummyjson', element:<PostsPage/>}
        ]}

])