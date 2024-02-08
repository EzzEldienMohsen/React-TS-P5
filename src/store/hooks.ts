import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { AppDispatch, RootState } from './store';

type DispatchFun = () => AppDispatch;

export const useCartDispatch: DispatchFun = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
