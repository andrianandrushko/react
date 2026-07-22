import {useDispatch} from "react-redux";
import {store} from "../../store/store.tsx";


export const useAppDispatchUsers = useDispatch.withTypes<typeof store.dispatch>()