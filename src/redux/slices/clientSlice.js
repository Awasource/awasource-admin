import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  error: {},
  clients: [],
};

export const clientSlice = createSlice({
  name: 'client',
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
    getClientsSuccess(state, action) {
      state.isLoading = false;
      state.clients = action.payload?.data;
    },
  },
});

export default clientSlice.reducer;
