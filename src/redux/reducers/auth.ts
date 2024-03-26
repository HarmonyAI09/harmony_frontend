import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: true,
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLogin = true;
    },
    logout: state => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authReducer.actions;

export default authReducer.reducer;
