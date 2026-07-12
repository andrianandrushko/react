import { useEffect, useState } from "react";
import type { IPosts } from "../models/IPosts.ts";
import { getPosts } from "../services/api.service.ts";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data);
        });
    }, []);

    return (
        <div>
            <h1>Posts</h1>

            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsPage;