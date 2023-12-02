import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  signUpThunk,
} from './authOperations';

const InitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};
const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilledLogout = (state, actiion) => {
  state.isLoading = false;
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const handlePendingRefreshing = (state, action) => {
  state.isLoading = true;
  state.isRefreshing = true;
};
const handleFulfilledRefresh = (state, action) => {
  state.isLoading = false;
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: InitialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addCase(signUpThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, handleFulfilledLogout)
      .addCase(logoutThunk.rejected, handleRejected)
      .addCase(refreshThunk.pending, handlePendingRefreshing)
      .addCase(refreshThunk.fulfilled, handleFulfilledRefresh)
      .addCase(refreshThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
