import {useEffect, useState} from 'react';
import type {IComments} from "../models/IComments.ts";
import {getComments} from "../services/api.service.ts";


const CommentComponents = () => {
    const [comments,setComments] = useState<IComments[]>([])
    useEffect(() => {
        getComments()
            .then(response => {
                setComments(response)
            })
    }, [])
    return (
        <div>
            {
                comments.map(comment => <div key={comment.postId}>item={comment.id}</div>)
            }
        </div>
    )
}
export default CommentComponents;