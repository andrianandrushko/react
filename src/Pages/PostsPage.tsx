import {useAppSelectorPosts} from "../redux/hooks/useAppSelectorPosts.ts";
import {useAppDispatchPosts} from "../redux/hooks/useAppDispatchPosts.ts";
import {useEffect} from "react";
import {postSliceActions} from "../redux/postSlice/postSlice.tsx";

const PostsPage = () => {
    // беремо два власних хуки для потсів
    const {posts, loadState} = useAppSelectorPosts(({postSlice})=>postSlice);
    const dispatch = useAppDispatchPosts();
    // завантаження коритувачів при першому рендері
    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);
    return (
        <div>
            {!loadState && <div>loading</div>}
            {
                // отримуємо пости за допомогою функції map
                posts.map(post=>(
                    <div className={'post'} key={post.id}>
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