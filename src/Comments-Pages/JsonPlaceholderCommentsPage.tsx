import {useEffect, useState} from "react";
import type {IComments} from "../Comments-models/IComments.ts";
import {getComments} from "../services/api.service.ts";

const JsonPlaceholderCommentsPage = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect(() =>{
        getComments()
            .then(response => {
                setComments(response)
            })
    },[])
    return (
        <div>
            {
                comments.map((comment, index) => <div key={index}>
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