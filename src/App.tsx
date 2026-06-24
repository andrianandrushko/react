import { useEffect, useState } from "react";
import type { IComments } from "./models/IComments.ts";
import './App.css'

const App = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setComments(data)
            })
    }, [])
    return (
        <>
            {
                comments.map((comment) => (
                    <div key={comment.id}  className={'cool'}>
                        <h2>posId:{comment.postId}</h2>
                        <h3>id:{comment.id}</h3>
                        <h4>name:{comment.name}</h4>
                        <h5>email:{comment.email}</h5>
                        <h6>body:{comment.body}</h6>
                    </div>))
            }
        </>
    )
}


export default App;