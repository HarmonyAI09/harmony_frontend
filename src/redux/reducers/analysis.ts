import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface IAnalysis {
  image: string;
  name: string;
  alias: string;
  value: number;
  score: number;
  range: string;
  meaning: string;
  advice?: string;
}

export interface AnalysisState {
  totalScore: number;
  frontData: {
    subScore: number;
    analyses: IAnalysis[];
  };
  sideData?: {
    subScore: number;
    analyses: IAnalysis[];
  };
}

const initialState: AnalysisState = {
  totalScore: 33.58,
  frontData: {
    subScore: 55.3,
    analyses: [
      {
        image: '',
        name: 'Eye Separation Ratio(%)',
        alias: 'GonialAngle',
        value: 43.61,
        score: 4.38,
        range: '45.00 - 47.90',
        meaning:
          'Your eyes have a slightly abnormal spacing relative to your facial width. They may begin to appear either close set (low values) or wide set (high values).',
        advice:
          'While extremely difficult to change the actual underlying morphology of your eyes, there are a few ways to improve this assessment: 1) Lose body-fat to create a thinner face, thereby increasing your ESR and making your eyes appear wider set. The opposite also holds true -- if you have overly wide set eyes, gaining some weight on your face can lead to the appearance of more normally spaced eyes. 2) Hairstyles to alter your perceived facial width. Along the same lines as facial fat, you can play around with hairstyles that add width to your face or reduce it. For example, if you have extremely wide set eyes, longer hairstyles that cover the sides of your face or add width can improve your perceived facial harmony. If your eyes are closer set, shorter hairstyles with shorter sides may suit your face better. 3) Cheekbone implants to increase the width of your face. Or, zygomatic reduction surgery to do the opposite. Overall, the only thing you can do is alter your facial width, but not the actual spacing of your eyes themselves. Craniofacial surgery can be used to correct severe cases of facial deformity, but it is not typically used to make minor corrections to eye spacing.',
      },
    ],
  },
};

export const analysisReducer = createSlice({
  name: 'analysis',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = analysisReducer.actions;

export default analysisReducer.reducer;
