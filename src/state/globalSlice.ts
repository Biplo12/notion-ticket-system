import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  null: null,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    null: () => {
      null;
    },
  },
});

const { actions, reducer } = slice;
export const { null: nullAction } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
