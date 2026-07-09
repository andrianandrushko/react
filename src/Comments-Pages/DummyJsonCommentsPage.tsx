import {useEffect, useState} from "react";
import type {ICommentsDummy} from "../Comments-models/IComments.dummy.ts";
import {getComment} from "../services/api.service.ts";

const DummyJsonCommentsPage = () => {
    const [comment, setComment] = useState<ICommentsDummy[]>([]);
    useEffect(()=>{
        getComment()
            .then(response => {
                setComment(response)
            })

    },[])
    return (
        <div>
            {
                comment.map((comment, index) => <div key={index}>
                    <p>id:{comment.id}</p>
                    <p>body:{comment.body}</p>
                    <p>postId:{comment.postId}</p>
                    <p>likes:{comment.likes}</p>
                    <p>id:{comment.user.id}</p>
                    <p>username:{comment.user.username}</p>
                    <p>fullName:{comment.user.fullName}</p>
                </div>)
            }
        </div>
    );
};

export default DummyJsonCommentsPage;