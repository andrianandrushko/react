import {useEffect, useState} from "react";
import type {IUsers} from "../Users-models/IUsers.ts";
import {getUsers} from "../services/api.service.ts";

const UsersPage = () => {
    cosnt [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getUsers()

    })
    return (
        <div>

        </div>
    );
};

export default UsersPage;