import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";

// власний хук для користувасчів за допопмогою useDispatch
export const useAppDispatchUsers = useDispatch.withTypes<typeof store.dispatch>()