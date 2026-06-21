import {useEffect, useState} from 'react';
import type {UserComponent} from "../models/UserComponent.ts";
import {getUsers} from "../services/api.service.ts";


const UserComponents = () => {
    const [users,setUsers] = useState<UserComponent[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <div key={user.firstName}>item={user.id}</div>)
            }
        </div>
    )
}
export default UserComponents;