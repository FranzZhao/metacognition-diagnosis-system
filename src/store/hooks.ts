import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '.';

// 重新定义一个Hook, 让这个Hook的state类型始终能够和我们store中存储的state是一样的,
// 这样就不需要每一次都在组件中重新去界定这个state的泛型是什么
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
