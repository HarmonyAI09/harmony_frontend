import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ETHNICITIES } from '@/constants/ethnicity';
import { GENDERS } from '@/constants/gender';

export interface IProfile {
  ID: string;
  name: string;
  gender: string;
  race: string;
  mappingPts: any[];
  date: string;
  isSaved?: boolean;
}

export interface ProfileState {
  profiles: IProfile[];
}

interface ICreateProfile {
  ID: string;
  gender: string;
  race: string;
  mappingPts: any[];
}

const initialState: ProfileState = {
  profiles: [],
};

export const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    createProfile: (
      state: ProfileState,
      action: PayloadAction<ICreateProfile>
    ) => {
      const profile = state.profiles.find(
        (item: IProfile) => item.ID === action.payload.ID
      );
      if (profile) {
        profile.gender = action.payload.gender;
        profile.race = action.payload.race;
        profile.mappingPts = action.payload.mappingPts;
      } else {
        state.profiles.push({
          ...action.payload,
          name: 'Untitled',
          date: '',
        });
      }
    },
    loadProfiles: (state: ProfileState, action: PayloadAction<any[]>) => {
      state.profiles = action.payload.map((profile: any) => ({
        ID: profile.profile_id,
        name: profile.name,
        race: ETHNICITIES[profile.race].value,
        gender: GENDERS[profile.gender].value,
        mappingPts: profile.points,
        isSaved: true,
        date: profile.date,
      }));
    },
    updateName: (
      state: ProfileState,
      action: PayloadAction<{ ID: string; name: string }>
    ) => {
      state.profiles = state.profiles.map((item: IProfile) =>
        item.ID === action.payload.ID
          ? { ...item, name: action.payload.name }
          : item
      );
    },
    updateDate: (
      state: ProfileState,
      action: PayloadAction<{ ID: string; date: string }>
    ) => {
      state.profiles = state.profiles.map((item: IProfile) =>
        item.ID === action.payload.ID
          ? { ...item, date: action.payload.date }
          : item
      );
    },
    saveProfile: (
      state: ProfileState,
      action: PayloadAction<{ ID: string }>
    ) => {
      state.profiles = state.profiles.map((item: IProfile) =>
        item.ID === action.payload.ID ? { ...item, isSaved: true } : item
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadProfiles,
  createProfile,
  saveProfile,
  updateName,
  updateDate,
} = profileReducer.actions;

export default profileReducer.reducer;
