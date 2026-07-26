import {useAppSelectorComments} from "../redux/hooks/useAppSelectorComments.ts";
import {useAppDispatchComments} from "../redux/hooks/useAppDispatchComments.ts";
import {useEffect} from "react";
import {commentSliceActions} from "../redux/commentSlice/commentSlice.tsx";

const CommentsPage = () => {
    // беремо два власні хуки для коментарів
    const {comments, loadState} = useAppSelectorComments(({commentSlice}) => commentSlice)
    const dispatch = useAppDispatchComments()
    // завантаження коритувачів при першому рендері
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, [])
    return (
        <div>
            {!loadState && <div>loading</div>}
            {
                // отримуємо пости за допомогою функції map
                comments.map(comment =>(
                    <div className={'commit'} key={comment.id}>
                        <p>id:{comment.id}</p>
                        <p>name:{comment.name}</p>
                        <p>email:{comment.email}</p>
                        <p>body:{comment.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default CommentsPage;