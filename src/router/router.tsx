import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import UsersPage from "../Pages/UsersPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import RecipePage from "../Pages/RecipePage.tsx";


export const router = createBrowserRouter([
    {
        path: "/", element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'recipe', element:<RecipePage/>}
        ]
    }
    ])