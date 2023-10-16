import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  ticketInfo: {
    category: '',
    workspace: '',
    message: '',
  },
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setTicketInfo: (state, action) => {
      state.ticketInfo = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { setTicketInfo } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
