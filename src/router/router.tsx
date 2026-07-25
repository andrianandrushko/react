import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import UsersPage from "../Pages/UsersPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/", element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'comments', element:<CommentsPage/>}
        ]
    }
    ])