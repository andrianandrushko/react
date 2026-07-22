import {useDispatch} from "react-redux";
import {store} from "../../store/store.tsx";

export const useAppDispatchComments = useDispatch.withTypes<typeof store.dispatch>();