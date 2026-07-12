import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import CarsPage from "../Pages/CarsPage.tsx";
import FormPage from "../Pages/FormPage.tsx";


export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>, children:[
            {path:'Cars', element:<CarsPage/>},
            {path:'Form', element:<FormPage/>}
        ]},
]);