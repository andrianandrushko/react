import { useEffect, useState } from "react";
import type { CommentComponent } from "./models/CommentComponent.ts";
import './App.css'

const App = () => {
    const [users, setUsers] = useState<CommentComponent[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
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
                        <h2>postId:{user.postId}</h2>
                        <h3>Id:{user.id}</h3>
                        <h4>name:{user.name}</h4>
                        <h5>email: {user.email}</h5>
                        <h6>body:{user.body}</h6>
                    </div>))

            }
        </>
    )
}


export default App;