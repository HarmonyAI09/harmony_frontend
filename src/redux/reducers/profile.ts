import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IProfile {
  name?: string;
  gender: string;
  race: string;
}

export interface ProfileState {
  profiles: IProfile[];
}

const initialState: ProfileState = {
  profiles: [],
};

export const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    createProfile: (state: ProfileState, action: PayloadAction<IProfile>) => {
      state.profiles.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = profileReducer.actions;

export default profileReducer.reducer;
