import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router";
import {router} from "./router/router.tsx";
import './App.css'
import './index.css'

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

