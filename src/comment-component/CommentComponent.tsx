import type { CommentComponent as ICom } from "../models/CommentComponent.ts";

interface Props {
    com: ICom;
}

const CommentComponent = ({ com }: Props) => {
    return (
        <div>
            <h2>PostId: {com.postId}</h2>
            <h3>Id: {com.id}</h3>
            <h4>Name: {com.name}</h4>
            <h5>Email: {com.email}</h5>
            <h6>Body: {com.body}</h6>
        </div>
    );
};

export default CommentComponent;