import {useFetch} from "./hooks/useFetch.ts";
import type {IPosts} from "./IPosts.ts";
import './App.css'

function App  () {

    const posts = useFetch<IPosts>('https://jsonplaceholder.typicode.com/posts')

    return (
        <div>
            {
                posts.map((post) => (
                    <div className='post' key={post.id}>
                        <p>userId:{post.userId}</p>
                        <p>id:{post.id}</p>
                        <p>title:{post.title}</p>
                        <p>body:{post.body}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default App;