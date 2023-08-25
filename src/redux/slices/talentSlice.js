import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  error: {},
  talents: [],
};

export const talentSlice = createSlice({
  name: 'talent',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getTalentsSuccess(state, action) {
      state.isLoading = false;
      state.talents = action.payload?.data;
    },
  },
});

export default talentSlice.reducer;
