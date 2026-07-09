import {useEffect, useState} from "react";
import type {IPost} from "../models/IPost.ts";
import {getPosts} from "../services/api.service.ts";

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
                posts.map((post, index) => (
                    <div key={index} className={'cool'}>
                        <h2>userId:{post.userId}</h2>
                        <h3>Id:{post.id}</h3>
                        <h4>title:{post.title}</h4>
                        <h5>body:{post.body}</h5>
                    </div>))

            }
        </>
    )
}


export default PostComponents;