import {useSelector} from "react-redux";
import {store} from "../../slices/store.tsx";


export const useAppSelectorComments = useSelector.withTypes<ReturnType<typeof store.getState >> ();