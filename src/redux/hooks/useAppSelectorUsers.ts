import {useSelector} from "react-redux";
import {store} from "../../slices/store.tsx";


export const useAppSelectorUsers = useSelector.withTypes<ReturnType<typeof store.getState >> ();