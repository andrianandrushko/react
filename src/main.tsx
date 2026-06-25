import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./Pages/UsersPage.tsx";
import JsonPlaceholderPage from "./Pages/JsonPlaceholderPage.tsx";
import DummyJsonPage from "./Pages/DummyJsonPage.tsx";
import JsonPlaceholderPostsPage from "./Pages/JsonPlaceholderPostsPage.tsx";
import PostsPage from "./Pages/PostsPage.tsx";
import DummyJsonPostsPage from "./Pages/DummyJsonPostsPage.tsx";
import CommentsPage from "./Pages/CommentsPage.tsx";
import JsonPlaceholderCommentsPage from "./Pages/JsonPlaceholderCommentsPage.tsx";
import DummyJsonCommentsPage from "./Pages/DummyJsonCommentsPage.tsx";



const router = createBrowserRouter([
     {
         path:'/', element:<Layout/>, children:[
             {path:'users', element:<UsersPage/>, children:[
                     {path:'JsonPlaceholder', element:<JsonPlaceholderPage />},
                     {path:'DummyJson', element:<DummyJsonPage/>}
                 ]},
             {path:'posts', element:<PostsPage/>,children:[
                     {path:'JsonPlaceholder', element:<JsonPlaceholderPostsPage/>},
                     {path:'DummyJson', element:<DummyJsonPostsPage/>}
                 ]},
             {path:'comments', element:<CommentsPage/>, children:[
                     {path:'JsonPlaceholder', element:<JsonPlaceholderCommentsPage/>},
                     {path:'DummyJson', element:<DummyJsonCommentsPage/>}
                 ]},

         ]}

 ])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

