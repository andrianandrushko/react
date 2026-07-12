import type {IComments} from "../models/IComments.ts";

interface Props {
    comment: IComments;
}

const CommentComponent = ({ comment }: Props) => {
    return (
        <div className={'cool'}>
            <p>id:{comment.id}</p>
            <p>body:{comment.body}</p>
            <p>postId:{comment.postId}</p>
            <p>likes:{comment.likes}</p>
            <p>id:{comment.user.id}</p>
            <p>username:{comment.user.username}</p>
            <p>fullName:{comment.user.fullName}</p>
        </div>
    );
};



export default CommentComponent;