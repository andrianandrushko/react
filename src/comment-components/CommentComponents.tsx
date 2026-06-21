import {useEffect, useState} from 'react';
import type {CommentComponent} from "../models/CommentComponent.ts";
import {getUsers} from "../services/api.service.ts";


const TodoComponents = () => {
    const [users,setUsers] = useState<CommentComponent[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <div key={user.postId}>item={user.id}</div>)
            }
        </div>
    )
}
export default TodoComponents;