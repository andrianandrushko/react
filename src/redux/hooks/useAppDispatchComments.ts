import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";


export const useAppDispatchComments = useDispatch.withTypes<typeof store.dispatch>()