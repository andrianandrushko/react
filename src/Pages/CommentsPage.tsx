import {useAppSelectorComments} from "../redux/hooks/useAppSelectorComments.ts";
import {useAppDispatchComments} from "../redux/hooks/useAppDispatchComments.ts";
import {useEffect} from "react";
import {commentSliceActions} from "../redux/commentSlice/commentSlice.tsx";

const CommentsPage = () => {
    const {comments, loadState} = useAppSelectorComments(({commentSlice}) => commentSlice)
    const dispatch = useAppDispatchComments()
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, [])
    return (
        <div>
            {!loadState && <div>loading</div>}
            {
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