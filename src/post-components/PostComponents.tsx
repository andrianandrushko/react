import {useEffect, useState} from 'react';
import type {IComments} from "../models/IComments.ts";
import {getUsers} from "../services/api.service.ts";


const PostComponents = () => {
    const [posts,setPosts] = useState<IComments[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setPosts(response)
            })
    }, [])
    return (
        <div>
            {
                posts.map(post => <div key={post.firstName}>item={post.id}</div>)
            }
        </div>
    )
}
export default PostComponents;