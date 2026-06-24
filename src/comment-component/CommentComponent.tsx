import type {IComments} from "../models/IComments.ts";

interface Props {
    comment: IComments;
}

const CommentComponent = ({ comment }: Props) => {
    return (
        <div>
            <h2>posId:{comment.postId}</h2>
            <h3>id:{comment.id}</h3>
            <h4>name:{comment.name}</h4>
            <h5>email:{comment.email}</h5>
            <h6>body:{comment.body}</h6>
        </div>
    );
};

export default CommentComponent;