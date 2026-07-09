import {useEffect, useState} from 'react';
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
                        <h2>posId:{comment.postId}</h2>
                        <h3>id:{comment.id}</h3>
                        <h4>name:{comment.name}</h4>
                        <h5>email:{comment.email}</h5>
                        <h6>body:{comment.body}</h6>
                    </div>))
            }
        </>
    )
}


export default CommentComponents;