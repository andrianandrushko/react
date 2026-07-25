import {useSelector} from "react-redux";
import type {store} from "../../slices/store.tsx";


export const useAppSelectorRecipe = useSelector.withTypes<ReturnType<typeof store.getState>>()