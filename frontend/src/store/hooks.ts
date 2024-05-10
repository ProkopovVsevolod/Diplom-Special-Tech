import { TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from "./store";

// Используйте во всем приложении вместо обычных `useDispatch` и `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;