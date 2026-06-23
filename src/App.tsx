import { useEffect, useState } from "react";
import type { IPost } from "./models/IPost.ts";
import './App.css'

const App = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])
    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.id} className={'cool'}>
                        <h2>userId:{post.userId}</h2>
                        <h3>Id:{post.id}</h3>
                        <h4>title:{post.title}</h4>
                        <h5>body:{post.body}</h5>
                    </div>))

            }
        </>
    )
}


export default App;