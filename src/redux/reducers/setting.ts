import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface SettingState {
  name: string;
  gender: string;
  race: string;
  profileID: string;
  mappingPoints: {
    front: any[];
    side: any[];
  };
}

export interface ProfileSetting {
  name: string;
  gender: string;
  race: string;
  ID: string;
  points: any[];
}

const initialState: SettingState = {
  name: 'Untitled',
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
    initializeSetting: (state: SettingState) => {
      if (!state.profileID) {
        state.profileID = uuidv4();
      }
    },
    resetSetting: (state: SettingState) => {
      state.name = 'Untitled';
      state.gender = '';
      state.race = '';
      state.profileID = uuidv4();
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
    loadSetting: (
      state: SettingState,
      action: PayloadAction<ProfileSetting>
    ) => {
      state.name = action.payload.name;
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
  initializeSetting,
  updateGender,
  updateRace,
  updateFrontPts,
  updateSidePts,
  resetSetting,
  loadSetting,
} = settingReducer.actions;

export default settingReducer.reducer;
