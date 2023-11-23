import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk } from "./thunks";
const InitialState={
    user:{name:null, email:null,},
    token:null,
    isLoggedIn:false,
    isRefreshing:false,
    isLoading:false,
    error:null,
}
const handlePending = (state, action)=>{
    state.isLoading=true;
}
const handleFulfilled = (state, action)=>{
    state.isLoading=false;
}
const handleRejected= (state, action)=>{
    state.isLoading=false;
    state.error = action.payload
}

export const authSlice = createSlice({
    name: 'auth',
    initialState:InitialState,
extraReducers: builder => {
    builder
    .addCase(signUpThunk.pending, handlePending )
    .addCase(signUpThunk.fulfilled, handleFulfilled)
    .addCase(signUpThunk.rejected, handleRejected)
}
})