import {useEffect, useState} from "react";
import {getPosts} from "../services/api.service.ts";
import type {IPosts} from '../Posts-models/IPosts.ts';


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
                posts.map((post, index) => <div key={index}>
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