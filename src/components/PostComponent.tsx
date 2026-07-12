import type { IPost as IPost } from "../models/IPost.ts";

interface Props {
    post: IPost;
}

const PostComponent = ({ post }: Props) => {
    return (
        <div>
            <div key={post.id} className={'cool'}>
                <h2>userId:{post.userId}</h2>
                <h3>Id:{post.id}</h3>
                <h4>title:{post.title}</h4>
                <h5>body:{post.body}</h5>
            </div>
        </div>
    );
};

export default PostComponent;