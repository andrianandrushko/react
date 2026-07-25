import {useAppSelectorPosts} from "../redux/hooks/useAppSelectorPosts.ts";
import {useAppDispatchPosts} from "../redux/hooks/useAppDispatchPosts.ts";
import {useEffect} from "react";
import {postSliceActions} from "../redux/postSlice/postSlice.tsx";

const PostsPage = () => {
    const {posts, loadState} = useAppSelectorPosts(({postSlice})=>postSlice);
    const dispatch = useAppDispatchPosts();
    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);
    return (
        <div>
            {!loadState && <div>loading</div>}
            {
                posts.map(post=>(
                    <div key={post.id}>
                        <p>userId:{post.userId}</p>
                        <p>id:{post.id}</p>
                        <p>title:{post.title}</p>
                        <p>body:{post.body}</p>
                    </div>
                ))
            }

        </div>
    );
};

export default PostsPage;