import {useAppDispatchComplex} from "../redux/hooks/useAppDispatchComplex.ts";
import {useEffect} from "react";
import {useAppSelectorComplex} from "../redux/hooks/useAppSelectorComplex.ts";
import {useParams} from "react-router";
import {complexSliceActions} from "../redux/complexSlices/complexSlice.ts";


export const ComplexPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatchComplex();
    const {complex, loadState} = useAppSelectorComplex(({complexSlice}) => complexSlice)
    useEffect(() => {
        if (id) {
            dispatch(complexSliceActions.loadComplex(Number(id)));
        }
    }, [id,dispatch]);
    return (
        <div>
            {!loadState && <div>loading</div>}

            {complex && (
                <div>
                    <p>{complex.users.id}.{complex.users.name}</p>
                </div>
            )
            }
            {
                complex?.posts.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            ))}
            {
                complex?.comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.email}</p>
                    </div>
                ))
            }
        </div>
    );
};


export default ComplexPage;

