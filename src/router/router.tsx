import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import ComplexPage from "../Pages/ComplexPage.tsx";
import UsersPage from "../Pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'complex/:id', element:<ComplexPage/>}
        ]
    }
])