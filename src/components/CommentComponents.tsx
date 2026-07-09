import {useEffect, useState} from "react";
import type {IComments} from "../models/IComments.ts";
import {getComments} from "../services/api.service.ts";

const CommentComponents = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect(() => {
      getComments()
            .then(data => {
                setComments(data)
            })
    }, [])
    return (
        <>
            {
                comments.map((comment, index) => (
                    <div key={index}  className={'cool'}>
                        <p>id:{comment.id}</p>
                        <p>body:{comment.body}</p>
                        <p>postId:{comment.postId}</p>
                        <p>likes:{comment.likes}</p>
                        <p>id:{comment.user.id}</p>
                        <p>username:{comment.user.username}</p>
                        <p>fullName:{comment.user.fullName}</p>
                    </div>)
                )
            }
        </>
    )
}



export default CommentComponents;