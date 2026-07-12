import type {IPosts} from "../models/IPosts.ts";

interface Props {
    post:IPosts
}
const PostsComponent = ({post}:Props) => {
    return (
        <div>
                <p>userId:{post.userId}</p>
                <p>id:{post.id}</p>
                <p>title:{post.title}</p>
                <p>body:{post.body}</p>
        </div>
    );
};

export default PostsComponent;