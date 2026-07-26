import {useSelector} from "react-redux";
import type {store} from "../../slices/store.tsx";

// власний хук рецептів за допомогою useSelector
export const useAppSelectorRecipe = useSelector.withTypes<ReturnType<typeof store.getState>>()