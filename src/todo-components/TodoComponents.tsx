import {useEffect, useState} from 'react';
import type { TodoComponent } from "../models/TodoComponent.ts";
import {getTodos} from "../services/api.service.ts";
import './App.css'


const TodoComponents = () => {
    const [todos,setTodos] = useState<TodoComponent[]>([])
    useEffect(() => {
        getTodos()
            .then(response => {
                setTodos(response)
            })
    }, [])
    return (
        <div>
            {
                todos.map(todo => <div key={todo.userId}>item={todo.id}</div>)
            }
        </div>
    )
}
export default TodoComponents;