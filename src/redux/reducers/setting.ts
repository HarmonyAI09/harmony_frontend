import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type MappingPointsType = {
  x: number;
  y: number;
}[][];

export interface SettingState {
  gender: string;
  race: string;
  profileID: string;
  mappingPoints: {
    front: MappingPointsType;
    side?: MappingPointsType;
  };
}

const initialState: SettingState = {
  gender: '',
  race: '',
  profileID: '',
  mappingPoints: {
    front: [],
  },
};

export const settingReducer = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateGender: (state: SettingState, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    updateRace: (state: SettingState, action: PayloadAction<string>) => {
      state.race = action.payload;
    },
    updateFrontPoints: (
      state: SettingState,
      action: PayloadAction<{ x: number; y: number }[][]>
    ) => {
      state.mappingPoints.front = action.payload;
    },
    updateSidePoints: (
      state: SettingState,
      action: PayloadAction<{ x: number; y: number }[][]>
    ) => {
      state.mappingPoints.side = action.payload;
    },
    updateProfileID: (state: SettingState, action: PayloadAction<string>) => {
      state.profileID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateGender,
  updateRace,
  updateFrontPoints,
  updateSidePoints,
  updateProfileID,
} = settingReducer.actions;

export default settingReducer.reducer;
