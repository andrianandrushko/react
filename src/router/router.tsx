import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/", element:<MainLayout/>, children:[
            {path:'comments', element:<CommentsPage/>}
        ]
    }
    ])