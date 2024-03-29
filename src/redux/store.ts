import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import authReducer from '@/redux/reducers/auth';
import settingReducer from '@/redux/reducers/setting';
import profileReducer from '@/redux/reducers/profile';
import analysisReducer from '@/redux/reducers/analysis';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settting: settingReducer,
    profile: profileReducer,
    analysis: analysisReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
