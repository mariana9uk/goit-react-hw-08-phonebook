import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts, signUpRequest } from './functionsAxios';
import { toast } from 'react-toastify';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => addContact({ contact })
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
export const signUpThunk = createAsyncThunk(
  'auth/register', 
(userData, thunkAPI) => {try {
  signUpRequest(userData)
  toast.success("User Created!")
 } catch (error) {
  console.log(error)
  toast.error(error)
    return thunkAPI.rejectWithValue(error.message)
 }
 }
)
export const loginThunk = createAsyncThunk(
  'auth/login',
  
)