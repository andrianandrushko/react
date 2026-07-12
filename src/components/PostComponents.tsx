import {useEffect, useState} from "react";
import type {IPosts} from "../models/IPosts.ts";
import {getPosts} from "../services/api.service.ts";
import PostComponent from "./PostComponent.tsx";

const PostComponents = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect(() => {
        getPosts()
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])
    return (
        <>
            {
                posts.map((post) => (
                    <PostComponent key={post.id} post={post} />
                   )
                )
            }
        </>
    )
}



export default PostComponents;