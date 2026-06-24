import {useEffect, useState} from "react";
import {getUsers} from "../services/api.service.ts";
import type {IUsers} from "../models/IUsers.ts";

const UsersComponents = () => {
    const [users,setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <div key={user.id}>item={user.id}</div>)
            }
        </div>
    )
}
export default UsersComponents;