import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";


export const useAppDispatchUsers = useDispatch.withTypes<typeof store.dispatch>()