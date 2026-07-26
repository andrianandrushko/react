import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";

// всланий хук постів за допомогою useDispatch
export const useAppDispatchPosts = useDispatch.withTypes<typeof store.dispatch>();