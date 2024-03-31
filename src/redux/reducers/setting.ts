import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SettingState {
  gender: string;
  race: string;
  profileID: string;
  mappingPoints: {
    front: any[];
    side: any[];
  };
}

export interface ProfileSetting {
  gender: string;
  race: string;
  ID: string;
  points: any[];
}

const initialState: SettingState = {
  gender: '',
  race: '',
  profileID: '',
  mappingPoints: {
    front: [],
    side: [],
  },
};

export const settingReducer = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    resetSetting: (state: SettingState) => {
      state.gender = '';
      state.race = '';
      state.profileID = '';
      state.mappingPoints = initialState.mappingPoints;
    },
    updateGender: (state: SettingState, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    updateRace: (state: SettingState, action: PayloadAction<string>) => {
      state.race = action.payload;
    },
    updateFrontPts: (state: SettingState, action: PayloadAction<any[]>) => {
      state.mappingPoints.front = action.payload;
    },
    updateSidePts: (state: SettingState, action: PayloadAction<any[]>) => {
      state.mappingPoints.side = action.payload;
    },
    updateProfileID: (state: SettingState, action: PayloadAction<string>) => {
      state.profileID = action.payload;
    },
    loadSetting: (
      state: SettingState,
      action: PayloadAction<ProfileSetting>
    ) => {
      state.gender = action.payload.gender;
      state.race = action.payload.race;
      state.profileID = action.payload.ID;
      state.mappingPoints.front = action.payload.points.slice(0, 30);
      state.mappingPoints.side = action.payload.points.slice(30);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateGender,
  updateRace,
  updateFrontPts,
  updateSidePts,
  updateProfileID,
  resetSetting,
  loadSetting,
} = settingReducer.actions;

export default settingReducer.reducer;
