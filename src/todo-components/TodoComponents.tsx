import {useEffect, useState} from 'react';
import type { TodoComponent } from "./models/TodoComponent.ts";
import {getUsers} from "./services/api.service.ts";


const TodoComponents = () => {
    const [users,setUsers] = useState<TodoComponent[]>([])
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