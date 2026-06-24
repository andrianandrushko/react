import { useEffect, useState } from "react";
import type {ITodos} from "./models/ITodos.ts";
import './App.css'

const App = () => {
    const [todos, setTodos] = useState<ITodos[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTodos(data.todos)
            })
    }, [])
    return (
        <>
            {
                todos.map((todo) => (
                    <div key={todo.id}  className={'cool'}>
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



export default App;