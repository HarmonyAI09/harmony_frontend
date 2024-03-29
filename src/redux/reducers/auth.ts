import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false,
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: state => {
      state.isLogin = true;
    },
    unauthorize: state => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authorize, unauthorize } = authReducer.actions;

export default authReducer.reducer;
