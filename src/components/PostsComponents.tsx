import {useEffect, useState} from "react";
import type {IPosts} from "../models/IPosts.ts";
import {getPosts} from "../services/api.service.ts";
import PostsComponent from "./PostsComponent.tsx";

const PostsComponents = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        getPosts()
        .then(data =>{
            setPosts(data);
        })
    })
    return (
        <div>
            {
                posts.map(post => (
                    <PostsComponent key={post.id} post={post} />
                ))
            }

        </div>
    );
};

export default PostsComponents;