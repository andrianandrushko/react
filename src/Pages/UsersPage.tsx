import { useEffect, useState } from "react";
import type { IUsers } from "../models/IUsers.ts";
import { getUsers } from "../services/api.service.ts";

const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            <h1>Users</h1>

            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersPage;