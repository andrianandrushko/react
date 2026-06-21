import { useEffect, useState } from "react";
import type { TodoComponent } from "./models/TodoComponent.ts";
import './App.css'

const App = () => {
    const [users, setUsers] = useState<TodoComponent[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])
    return (
        <>
            {
                users.map((user) => (
                    <div key={user.id} className={'cool'}>
                        <h2>userId:{user.userId}</h2>
                        <h3>Id:{user.id}</h3>
                        <h4>title:{user.title}</h4>
                        <h5>completed:{user.completed ? "true" : "false"}</h5>
                    </div>))

            }
        </>
    )
}


export default App;