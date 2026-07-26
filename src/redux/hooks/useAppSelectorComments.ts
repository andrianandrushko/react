import {useSelector} from "react-redux";
import {store} from "../../slices/store.tsx";

// власний хуе коментарів за допомогою useSelector
export const useAppSelectorComments = useSelector.withTypes<ReturnType<typeof store.getState >> ();