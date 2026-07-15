import {useEffect} from "react";
import {login} from "../services/api.service.ts";

const LoginPage = () => {
    useEffect(() => {
        // цей логін передає дані з dummyjson.com/users
        login({
            username: "emilys",
            password: "emilyspass",
            expiresInMins: 1
        })
    }, []);
    return (
        <div>
            Login page
        </div>
    );
};

export default LoginPage;