import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./Users-Page/UsersPage.tsx";
import PostsPage from "./Posts-Page/PostsPage.tsx";



const router = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'/users/dummyjson', element:<UsersPage/>},
             {path:'/posts/dummyjson', element:<PostsPage/>}
         ]}

 ])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

