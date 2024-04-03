import { SERVER_URI } from '@/config';
import { ASSESSMENTS } from '@/constants/analysis';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAnalysis {
  image: string;
  name: string;
  alias: string;
  value: string;
  score: number;
  maxscore: number;
  minscore: number;
  ideal: string;
  meaning: string;
  advice: string;
  label: string;
}

interface IReqFeature {
  measure: string;
  value: string;
  index: number;
  ideal: string;
}

export interface AnalysisState {
  score: {
    front: number;
    side: number;
    total: number;
  };
  analyses: IAnalysis[];
}

const initialState: AnalysisState = {
  score: {
    front: 0,
    side: 0,
    total: 0,
  },
  analyses: [],
};

export const analysisReducer = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    loadFeatures: (
      state: AnalysisState,
      action: PayloadAction<{ ID: string; features: IReqFeature[] }>
    ) => {
      state.analyses = action.payload.features.map(
        (feature: IReqFeature, index: number) => ({
          image: `${SERVER_URI}/img/feat/${action.payload.ID}/${index}`,
          label: (ASSESSMENTS as any)[feature.measure].meaning,
          name: (ASSESSMENTS as any)[feature.measure].name,
          alias: feature.measure,
          value: `${feature.value} ${
            (ASSESSMENTS as any)[feature.measure].unit
          }`,
          score: (ASSESSMENTS as any)[feature.measure].scores[feature.index],
          maxscore: (ASSESSMENTS as any)[feature.measure].scores[0],
          minscore: (ASSESSMENTS as any)[feature.measure].scores.slice(-1)[0],
          ideal: feature.ideal,
          meaning: (ASSESSMENTS as any)[feature.measure].notes[feature.index],
          advice:
            feature.index === 0
              ? 'N/A'
              : (ASSESSMENTS as any)[feature.measure].advice,
        })
      );

      const { total: frontTot, score: frontScore } = action.payload.features
        .slice(0, 23)
        .reduce(
          (tot: { total: number; score: number }, feature: IReqFeature) => ({
            total: tot.total + (ASSESSMENTS as any)[feature.measure].scores[0],
            score:
              tot.score +
              (ASSESSMENTS as any)[feature.measure].scores[feature.index],
          }),
          { total: 0, score: 0 }
        );
      const { total: sideTot, score: sideScore } = action.payload.features
        .slice(23)
        .reduce(
          (tot: { total: number; score: number }, feature: IReqFeature) => ({
            total: tot.total + (ASSESSMENTS as any)[feature.measure].scores[0],
            score:
              tot.score +
              (ASSESSMENTS as any)[feature.measure].scores[feature.index],
          }),
          { total: 0, score: 0 }
        );

      state.score = {
        total: Math.floor(
          ((frontScore + sideScore) / (frontTot + sideTot)) * 100
        ),
        front: Math.floor((frontScore / frontTot) * 100),
        side: Math.floor((sideScore / sideTot) * 100),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadFeatures } = analysisReducer.actions;

export default analysisReducer.reducer;
