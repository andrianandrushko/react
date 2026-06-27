import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./Users-Pages/UsersPage.tsx";
import CartsPage from "./Carts-Page/CartsPage.tsx";
import './App.css';


const router = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'users', element:<UsersPage/>},
             {path:'/users/:id/carts', element:<CartsPage/>}
                 ]},
 ]);
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

