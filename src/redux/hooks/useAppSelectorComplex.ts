import {useSelector} from "react-redux";
import {store} from "../../store/store.tsx";


export const useAppSelectorComplex = useSelector.withTypes<ReturnType<typeof store.getState>>()