import {useEffect, useState} from "react";
import type {IPosts} from "../models/IPosts.ts";
import {getPosts} from "../services/api.service.ts";

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
                posts.map((post, index) => (
                    <div key={index}  className={'cool'}>
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



export default PostComponents;