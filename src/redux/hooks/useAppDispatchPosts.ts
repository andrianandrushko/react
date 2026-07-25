import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";


export const useAppDispatchPosts = useDispatch.withTypes<typeof store.dispatch>();