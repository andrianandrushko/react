import {useEffect, useState} from "react";
import type {ITodos} from "../models/ITodos.ts";
import {getTodos} from "../services/api.service.ts";



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
                todos.map((todo, index) => (
                    <div key={index}  className={'cool'}>
                        <p>id:{todo.id}</p>
                        <p>todo:{todo.todo}</p>
                        <p>completed:{todo.completed ? "true" : "false"}</p>
                        <p>userId:{todo.userId}</p>
                    </div>)
                )
            }
        </>
    )
}



export default TodoComponents;