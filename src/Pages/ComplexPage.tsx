import {useAppSelectorUsers} from "../redux/hooks/useAppSelectorUsers.ts";
import {useAppSelectorPosts} from "../redux/hooks/useAppSelectorPosts.ts";
import {useAppSelectorComments} from "../redux/hooks/useAppSelectorComments.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/userSlices/userSlices.ts";
import {postSliceActions} from "../redux/postSlices/postSlice.ts";
import {commentSliceActions} from "../redux/commentSlices/commentSlice.ts";
import {useAppDispatchComplex} from "../redux/hooks/useAppDispatchComplex.ts";
import {useParams} from "react-router";
import {useAppSelectorComplex} from "../redux/hooks/useAppSelectorComplex.ts";


export const ComplexPage = () => {
    const {id} = useParams();
    const {loadState} = useAppSelectorComplex(({complexSlice}) => complexSlice);
    const { users } = useAppSelectorUsers(state => state.userSlice);
    const { posts } = useAppSelectorPosts(state => state.postSlice);
    const { comments } = useAppSelectorComments(state => state.commentSlice);
    const dispatch = useAppDispatchComplex();
    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceActions.loadUsers());
        }

        if (!posts.length) {
            dispatch(postSliceActions.loadPosts());
        }

        if (!comments.length) {
            dispatch(commentSliceActions.loadComments());
        }
    }, [id]);

    return (
        <div>
            {!loadState && <div>loading</div>}
            {users.map(user => {
                if (user.id === Number(id)) {
                    return (
                        <div key={user.id}>
                            <p>{user.id}.{user.name}</p>
                        </div>
                    );
                }
            })}
            {posts.map(post => {
                if (post.userId === Number(id)) {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>

                            {comments.map(comment => {
                                if (comment.postId === post.id) {
                                    return (
                                        <div key={comment.id}>
                                            <p>{comment.email}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    );
                }
            })}
        </div>
    );
};


export default ComplexPage;

