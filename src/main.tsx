import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./Pages/UsersPage.tsx";
import JsonPlaceholderPage from "./Pages/JsonPlaceholderPage.tsx";



 const rounter = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'users', element:<UsersPage/>, children:[
                     {path:'JsonPlaceholder',element:<JsonPlaceholderPage />},
                 ]},
         ]}

 ])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={rounter}/>)

