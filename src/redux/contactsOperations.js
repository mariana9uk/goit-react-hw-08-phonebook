import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  try {
    const responce = await axios.get('/contacts');
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    toast('Error!');
  }
};
export const addContact = async ({ contact }) => {
  try {
    const responce = await axios.post('/contacts', contact);
    return responce.data;
  } catch (error) {
    toast('Error!');
  }
};
export const deleteContact = async id => {
  try {
    const responce = await axios.delete(`/contacts/${id}`);
    return responce.data;
  } catch (error) {
    toast('Error!');
  }
};
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
