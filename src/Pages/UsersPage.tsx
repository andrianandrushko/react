import UsersComponents from "../components/UsersComponents.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <UsersComponents />
        </div>
    );
};

export default UsersPage;