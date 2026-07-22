import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',element:<MainLayout/>, children:[
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>}
        ]
    }
])