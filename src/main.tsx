import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {store} from "./slices/store.tsx";
import {router} from "./router/router.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
);

