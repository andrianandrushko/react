import {useEffect, useState} from "react";
import {getUsers} from "../services/api.service.ts";
import type {ITodos} from "../models/ITodos.ts";

const TodosComponents = () => {
    const [todos,setTodos] = useState<ITodos[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setTodos(response)
            })
    }, [])
    return (
        <div>
            {
                todos.map(todo => <div key={todo.id}>item={todo.id}</div>)
            }
        </div>
    )
}
export default TodosComponents;