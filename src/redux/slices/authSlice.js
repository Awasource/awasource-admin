import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: {},
  auth: null,
  isAuthenticated: false,
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
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
    loginSuccess(state, action) {
      state.isLoading = false;
      state.auth = action.payload;
      state.token = action.payload?.token ?? null;
    },
    verifySuccess(state, action) {
      state.isLoading = false;
      state.auth = action.payload;
      state.isAuthenticated = !!action.payload?.token;
      state.token = action.payload?.token ?? null;
    },
    logoutSuccess(state) {
      state.isLoading = false;
      state.auth = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
