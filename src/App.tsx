import {useFetch} from "./hooks/useFetch.ts";
import type {IPosts} from "./IPosts.ts";
import './App.css'
import PostsComponent from "./components/PostsComponent.tsx";


function App  () {

    const posts = useFetch<IPosts[]>('https://jsonplaceholder.typicode.com/posts')
    console.log(posts)

    return (
        <div>
            {
                posts.map((post) => (
                    <PostsComponent key={post.id} post={post}/>
                ))
            }
        </div>
    );
}

export default App;