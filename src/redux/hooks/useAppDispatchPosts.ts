import {useDispatch} from "react-redux";
import {store} from "../../store/store.tsx";


export const useAppDispatchPosts = useDispatch.withTypes<typeof store.dispatch>();