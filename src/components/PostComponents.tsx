import {useEffect, useState} from "react";
import type {IPost} from "../models/IPost.ts";
import {getPosts} from "../services/api.service.ts";
import PostComponent from "./PostComponent.tsx";

const PostComponents = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
       getPosts()
            .then(data => {
                setPosts(data)
            })
    }, [])
    return (
        <>
            {
                posts.map((post) => (
                    <PostComponent key={post.id} post={post} />
                    ))

            }
        </>
    )
}


export default PostComponents;