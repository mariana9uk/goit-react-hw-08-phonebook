import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectAuth } from './selectors';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
// export const signUpRequest = async body => {
//   const responce = await axios.post('/users/signup', body);
//   setAuthHeader(responce.data.token);
//   return responce.data;
// };
// export const loginRequest = async body => {
//   const responce = await axios.post('/users/login', body);
//   console.log(responce);
//   setAuthHeader(responce.data.token);
//   return responce.data;
// };

export const signUpThunk = createAsyncThunk(
  'auth/register',
 async (userData, thunkAPI) => {
    try {
      const responce = await axios.post('/users/signup', userData);
      toast.success(`User ${responce.data.user.name} created!`)
      setAuthHeader(responce.data.token);
      console.log(responce.data)
          return responce.data;
   
 
    } catch (error) {
      console.log(error)
      toast.error(`User ${userData.name} is already exists!`)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const responce = await axios.post('/users/login', userData);
      setAuthHeader(responce.data.token);
    //   toast.success(`Welcome, ${responce.data.user.name}!`);
      return responce.data;
    } catch (error) {
      console.log(error);
      toast.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('no valid token');

    setAuthHeader(token);
    try {
      const responce = await axios.get('/users/current');
      return responce.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
