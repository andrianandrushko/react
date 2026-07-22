import {useSelector} from "react-redux";
import type {store} from "../../store/store.tsx";


export const useAppSelectorComments = useSelector.withTypes<ReturnType<typeof store.getState>>()