import {useEffect, useState} from "react";
import {getPosts} from "../services/api.service.ts";
import type {IPosts} from '../models/IPosts.ts';


const JsonPlaceholderPostsPage = () => {
    const [posts,setPosts] = useState<IPosts[]>([])
    useEffect(() => {
        getPosts()
            .then(response => {
                setPosts(response)
            })
    }, [])
    return (
        <div>
            {
                posts.map(post => <div key={post.id}>
                    <p>userId:{post.userId}</p>
                    <p>id:{post.id}</p>
                    <p>title:{post.title}</p>
                    <p>body:{post.body}</p>
                </div>)
            }
        </div>
    )
}
export default JsonPlaceholderPostsPage