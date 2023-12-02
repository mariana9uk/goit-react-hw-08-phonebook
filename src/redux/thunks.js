import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contactsOperations';
import { toast } from 'react-toastify';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


