import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLogin: boolean;
  account?: IAccount;
}

export interface IAccount {
  userID?: string;
  auth: number;
  customerID?: string;
  subscribeID?: string | null;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  credits?: number;
}

export interface IReqAccount {
  user_id: string;
  auth: number;
  customer_id: string;
  subscription_id: string | null;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  credits: number;
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
    loadAccount: (state: AuthState, action: PayloadAction<IReqAccount>) => {
      const {
        user_id,
        auth,
        customer_id,
        subscription_id,
        first_name,
        last_name,
        username,
        email,
        credits,
      } = action.payload;
      state.account = {
        userID: user_id,
        auth,
        customerID: customer_id,
        subscribeID: subscription_id,
        username,
        email,
        firstname: first_name,
        lastname: last_name,
        credits,
      };
    },
    updateSubscribe: (
      state: AuthState,
      action: PayloadAction<string | null>
    ) => {
      if (state.account) {
        state.account.subscribeID = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { authorize, unauthorize, loadAccount, updateSubscribe } =
  authReducer.actions;

export default authReducer.reducer;
