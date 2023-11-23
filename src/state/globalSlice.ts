import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';
import { TTicketInfo } from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  ticketInfo: {
    category: '',
    workspace: '',
    message: '',
  },
  ticketStatus: 'idle',
  isInfoModalOpen: false,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setTicketInfo: (state, action: PayloadAction<TTicketInfo>) => {
      state.ticketInfo = action.payload;
    },
    setTicketStatus: (state, action: PayloadAction<'sending' | 'idle'>) => {
      state.ticketStatus = action.payload;
    },
    setInfoModalStatus: (state, action: PayloadAction<boolean>) => {
      state.isInfoModalOpen = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { setTicketInfo, setTicketStatus, setInfoModalStatus } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
