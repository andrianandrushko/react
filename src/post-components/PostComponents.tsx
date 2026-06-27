import {useEffect, useState} from 'react';
import type {IPost} from "../models/IPost.ts";
import {getPosts} from "..//services/api.service.ts";


const PostComponents = () => {
    const [posts,setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts()
            .then(response => {
                setPosts(response)
            })
    }, [])
    return (
        <div>
            {
                posts.map(post => <div key={post.userId}>item={post.id}</div>)
            }
        </div>
    )
}
export default PostComponents;