import {useEffect, useState} from 'react';
import type {PostComponent} from "..//models/PostComponent.ts";
import {getUsers} from "..//services/api.service.ts";


const TodoComponents = () => {
    const [users,setUsers] = useState<PostComponent[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <div key={user.userId}>item={user.id}</div>)
            }
        </div>
    )
}
export default TodoComponents;