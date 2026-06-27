import {useEffect, useState} from "react";
import type {IComments} from "../models/IComments.ts";
import {getComments} from "../services/api.service.ts";

const JsonPlaceholderCommentsPage = () => {
    const [comments, setPosts] = useState<IComments[]>([])
    useEffect(() =>{
        getComments()
            .then(response => {
                setPosts(response)
            })
    },[])
    return (
        <div>
            {
                comments.map(comment => <div key={comment.id}>
                    <p>postId:{comment.postId}</p>
                    <p>id:{comment.id}</p>
                    <p>name:{comment.name}</p>
                    <p>email:{comment.email}</p>
                    <p>body:{comment.body}</p>
                    </div>)
            }
        </div>
    )
}

export default JsonPlaceholderCommentsPage;