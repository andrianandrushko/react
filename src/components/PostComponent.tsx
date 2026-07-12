import type { IPosts } from "../models/IPosts.ts";

interface Props {
    post: IPosts;
}

const PostComponent = ({ post }: Props) => {
    return (
        <div className="cool">
            <p>id: {post.id}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <p>tags: {post.tags}</p>
            <p>likes: {post.reactions.likes}</p>
            <p>dislikes: {post.reactions.dislikes}</p>
            <p>views: {post.views}</p>
        </div>
    );
};

export default PostComponent;