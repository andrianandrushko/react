import type { IPost as IPost } from "../models/IPost.ts";

interface Props {
    post: IPost;
}

const PostComponent = ({ post }: Props) => {
    return (
        <div>
            <h2>UserId: {post.userId}</h2>
            <h3>Id: {post.id}</h3>
            <h4>Title: {post.title}</h4>
            <h5>Body: {post.body}</h5>
        </div>
    );
};

export default PostComponent;