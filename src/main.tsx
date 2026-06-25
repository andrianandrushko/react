import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./Pages/UsersPage.tsx";
import JsonPlaceholderPage from "./Pages/JsonPlaceholderPage.tsx";
import DummyJsonPage from "./Pages/DummyJsonPage.tsx";
import JsonPlaceholderPostsPage from "./Pages/JsonPlaceholderPostsPage.tsx";
import PostsPage from "./Pages/PostsPage.tsx";



const router = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'users', element:<UsersPage/>, children:[
                     {path:'JsonPlaceholder', element:<JsonPlaceholderPage />},
                     {path:'DummyJson', element:<DummyJsonPage/>}
                 ]},
             {path:'posts', element:<PostsPage/>,children:[
                     {path:'JsonPlaceholder', element:<JsonPlaceholderPostsPage/>},
                 ]},

         ]}

 ])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

