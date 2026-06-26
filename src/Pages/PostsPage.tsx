import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IPosts} from "../models/IPosts.ts";
import {getPosts} from "../services/api.service.ts";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(()=>{
        getPosts()
            .then(response =>{
                setPosts(response);
            });
    },[]);


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
            <Outlet/>
        </div>
    );
};

export default PostsPage;