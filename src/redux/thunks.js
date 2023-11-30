import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  loginRequest,
  logoutRequest,
  signUpRequest,
} from './functionsAxios';
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
