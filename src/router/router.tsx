import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import UsersPage from "../Users-Page/UsersPage.tsx";
import CartsPage from "../Carts-Page/CartsPage.tsx";

export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'/users/:id/carts', element:<CartsPage/>}
        ]},
]);