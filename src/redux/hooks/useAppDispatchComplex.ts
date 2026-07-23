import {useDispatch} from "react-redux";
import {store} from "../../store/store.tsx";

export const useAppDispatchComplex = useDispatch.withTypes<typeof store.dispatch>();