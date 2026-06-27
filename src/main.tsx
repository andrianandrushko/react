import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PaginationComponent from "./pagination/PaginationComponent.tsx";
import './App.css';


const router = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'users', element:<PaginationComponent/>},
                 ]},
 ]);
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

