import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import UsersPage from "./Pages/UsersPage.tsx"
import PostsPage from "./Pages/PostsPage.tsx";
import CommentsPage from "./Pages/CommentsPage.tsx";
import ProductsPage from "./Pages/ProductsPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


 const rounter = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'users', element:<UsersPage/>},
             {path:'posts', element:<PostsPage/>},
             {path:'comments', element:<CommentsPage/>},
             {path:'products', element:<ProductsPage/>},
         ]}




 ])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={rounter}/>)
