import type {IPostDummy} from "../Posts-models/IPost.dummy.ts";
import {getPost} from "../services/api.service.ts";
import {useEffect, useState} from "react";


const DummyJsonPostsPage = () => {
    const [posts,setPosts] = useState<IPostDummy[]>([])
    useEffect(() => {
        getPost()
            .then(response => {
                setPosts(response)
            })
    }, [])
    return (
        <div>
            {
                posts.map((post, index) => <div key={index}>
                    <p>id:{post.id}</p>
                    <p>title:{post.title}</p>
                    <p>body:{post.body}</p>
                    <p>tags:{post.tags}</p>
                    <p>likes:{post.reactions.likes}</p>
                    <p>likes:{post.reactions.dislikes}</p>
                    <p>dislikes:{post.reactions.dislikes}</p>
                    <p>views:{post.views}</p>
                    <p>userId:{post.userId}</p>
                </div>)
            }
        </div>
    )
}
export default DummyJsonPostsPage