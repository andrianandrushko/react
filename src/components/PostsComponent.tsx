import type {IPosts} from "../IPosts.ts";


interface Props{
    post:IPosts
}
const PostsComponent = ({post}:Props) => {
    return (
        <div>
            <div className="posts">
                <p>userId:{post.userId}</p>
                <p>id:{post.id}</p>
                <p>title:{post.title}</p>
                <p>body:{post.body}</p>
            </div>
        </div>
    );
};

export default PostsComponent;