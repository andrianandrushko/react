import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import UsersPage from "../Pages/UsersPage.tsx";
import JsonPlaceholderPage from "../Pages/JsonPlaceholderPage.tsx";
import DummyjsonPage from "../Pages/DummyjsonPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import ProductsPage from "../Pages/ProductsPage.tsx";
;

export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>, children:[
            {path:'users', element:<UsersPage/>, children:[
                    {path:'JsonPlaceholder',element:<JsonPlaceholderPage />},
                    {path:'Dummyjson', element:<DummyjsonPage/>}
                ]},

            {path:'posts', element:<PostsPage/>, children:[
                    {path:'JsonPlaceholder', element:<JsonPlaceholderPage />},
                    {path:'Dummyjson', element:<DummyjsonPage/>}
                ]},

            {path:'comments', element:<CommentsPage/>, children:[
                    {path:'JsonPlaceholder', element:<JsonPlaceholderPage />},
                    {path:'Dummyjson', element:<DummyjsonPage/>}
                ]},

            {path:'products', element:<ProductsPage/>, children:[
                    {path:'JsonPlaceholder', element:<JsonPlaceholderPage />},
                    {path:'Dummyjson', element:<DummyjsonPage/>}
                ]},
        ]}
])