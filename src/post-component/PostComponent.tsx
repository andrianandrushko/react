import type { PostComponent as IPost } from "..//models/PostComponent.ts";

interface Props {
    post: IPost;
}

const TodoComponent = ({ post }: Props) => {
    return (
        <div>
            <h2>UserId: {post.userId}</h2>
            <h3>Id: {post.id}</h3>
            <h4>Title: {post.title}</h4>
            <h5>Body: {post.body}</h5>
        </div>
    );
};

export default TodoComponent;