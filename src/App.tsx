import { useEffect, useState } from "react";
import type {IComments} from "./models/IComments.ts";
import './App.css'

const App = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setComments(data.comments)
            })
    }, [])
    return (
        <>
            {
                comments.map((comment) => (
                    <div key={comment.id}  className={'cool'}>
                        <p>id:{comment.id}</p>
                        <p>body:{comment.body}</p>
                        <p>postId:{comment.postId}</p>
                        <p>likes:{comment.likes}</p>
                        <p>id:{comment.user.id}</p>
                        <p>username:{comment.user.username}</p>
                        <p>fullName:{comment.user.fullName}</p>
                    </div>)
                )
            }
        </>
    )
}



export default App;