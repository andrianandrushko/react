import { useEffect, useState } from "react";
import type {IPosts} from "./models/IPosts.ts";
import './App.css'

const App = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts(data.posts)
            })
    }, [])
    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.id}  className={'cool'}>
                        <p>id:{post.id}</p>
                        <p>title:{post.title}</p>
                        <p>body:{post.body}</p>
                        <p>tags:{post.tags}</p>
                        <p>likes:{post.reactions.likes}</p>
                        <p>dislikes:{post.reactions.dislikes}</p>
                        <p>views:{post.views}</p>
                    </div>)
                )
            }
        </>
    )
}



export default App;