import { useEffect, useState } from "react";
import type { TodoComponent } from "./models/TodoComponent.ts";
import './App.css'


const App = () => {
    const [todos, setTodos] = useState<TodoComponent[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTodos(data)
            })
    }, [])
    return (
        <>
            {
                todos.map((todo) => (
                    <div key={todo.id} className={'cool'}>
                        <h2>userId:{todo.userId}</h2>
                        <h3>Id:{todo.id}</h3>
                        <h4>title:{todo.title}</h4>
                        <h5>completed:{todo.completed ? "true" : "false"}</h5>
                    </div>))

            }
        </>
    )
}


export default App;