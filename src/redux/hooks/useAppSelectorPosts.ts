
import {useSelector} from "react-redux";
import type {store} from "../../slices/store.tsx";

// власний хук постів за допомогою useSelector
export const useAppSelectorPosts = useSelector.withTypes<ReturnType<typeof store.getState >> ()