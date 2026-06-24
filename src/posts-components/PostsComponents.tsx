import {useEffect, useState} from "react";
import type {IPosts} from "../models/IPosts.ts";
import {getPosts} from "../services/api.service.ts";

const PostsComponents = () => {
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
                posts.map(post => <div key={post.id}>item={post.id}</div>)
            }
        </div>
    )
}
export default PostsComponents;