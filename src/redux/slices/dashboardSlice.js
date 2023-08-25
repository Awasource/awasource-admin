import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  error: {},
  metrics: {
    clients: 0,
    jobs: 0,
    talents: 0,
  },
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
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
    getMetricsSuccess(state, action) {
      state.isLoading = false;
      state.metrics = action.payload;
    },
  },
});

export default dashboardSlice.reducer;
