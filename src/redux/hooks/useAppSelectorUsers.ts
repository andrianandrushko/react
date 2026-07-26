import {useSelector} from "react-redux";
import {store} from "../../slices/store.tsx";

// власний хук для користувасчів за допопмогою useSelector
export const useAppSelectorUsers = useSelector.withTypes<ReturnType<typeof store.getState >> ();