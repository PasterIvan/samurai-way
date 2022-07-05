import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, StoreType} from "../redux/ReduxStore";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector