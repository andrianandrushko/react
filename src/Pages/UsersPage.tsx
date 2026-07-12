import { Outlet } from "react-router-dom";
import UsersComponents from "../components/UsersComponents.tsx";

const UsersPage = () => {
    return (
        <div>
            <UsersComponents />
            <Outlet />
        </div>
    );
};

export default UsersPage;