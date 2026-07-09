import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import UsersPage from "../Pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>, children:[
            {path:'users', element:<UsersPage/>},
        ]},
]);