import {useEffect, useState} from "react";
import type {IComments} from "../models/IComments.ts";
import {getComments} from "../services/api.service.ts";
import CommentComponent from "./CommentComponent.tsx";

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
                comments.map((comment) => (
                    <CommentComponent key={comment.id} comment={comment} />
                   )
                )
            }
        </>
    )
}



export default CommentComponents;