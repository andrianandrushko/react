import {useEffect, useState} from "react";
import {getTodos} from "../services/api.service.ts";
import type {ITodos} from "../models/ITodos.ts";

const TodosComponents = () => {
    const [todos,setTodos] = useState<ITodos[]>([])
    useEffect(() => {
        getTodos()
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