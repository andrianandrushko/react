import {useSelector} from "react-redux";
import type {store} from "../../store/store.tsx";


export const useAppSelectorUsers = useSelector.withTypes<ReturnType<typeof store.getState>>()