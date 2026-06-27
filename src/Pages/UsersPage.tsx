import {useEffect, useState} from "react";
import type {IUsers} from "../Users-models/IUsers.ts";
import {getUsers} from "../services/api.service.ts";

const UsersPage = () => {
    cosnt [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            })
    })
    return (
        <div>
            {
                users.map(user => <div></div>)
            }

        </div>
    );
};

export default UsersPage;