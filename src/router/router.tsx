import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import UsersPage from "../Pages/UsersPage.tsx";
import CartsPage from "../Pages/CartsPage.tsx";

export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>, children:[
            {path:'users', element:<UsersPage/>, children:[
                    {path:':id', element:<CartsPage/>}
                ]},
        ]},

])