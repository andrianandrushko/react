import {useEffect, useState} from "react";
import type {ITodos} from "../models/ITodos.ts";
import {getTodos} from "../services/api.service.ts";
import TodoComponent from "./TodoComponent.tsx";


const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodos[]>([])
    useEffect(() => {
        getTodos()
            .then(data => {
                setTodos(data)
            })
    }, [])
    return (
        <>
            {
                todos.map((todo) => (
                   <TodoComponent key={todo.id} todo={todo}/>
                    ))}
        </>
    )
}



export default TodoComponents;