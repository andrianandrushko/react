import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";

// власний хук коментарів за одпомогою useDispatch
export const useAppDispatchComments = useDispatch.withTypes<typeof store.dispatch>()