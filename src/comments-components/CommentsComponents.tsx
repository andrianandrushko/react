import {useEffect, useState} from "react";
import type {IComments} from "../models/IComments.ts";
import {getComments} from "../services/api.service.ts";

const CommentsComponents = () => {
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
                comments.map(comment => <div key={comment.id}>item={comment.id}</div>)
            }
        </div>
    )
}
export default CommentsComponents;