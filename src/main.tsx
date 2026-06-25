import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./Pages/UsersPage.tsx";



const router = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'/users/dummyjson', element:<UsersPage/>},
         ]}

 ])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

