import { useDispatch, useSelector } from 'react-redux';
import { StyledContacts } from './ContactsStyleed';

import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContactThunk, getContactsThunk } from 'redux/contactsOperations';

export const ContactsList = () => {

  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filters);
  const { isLoading, error, items } = useSelector(getContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  
  if (!items || items.length === 0) return;
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const contactsListItems = filteredContacts.map(contact => (
    <li key={contact.id}>
      {contact.name}:{contact.number}
      <button
        type="button"
        onClick={() => dispatch(deleteContactThunk(contact.id))}
      >
        Delete
      </button>
    </li>
  ));
  return (
    <div>
      <div>
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
      </div>
      <div>{contactsListItems}</div>
      <ToastContainer />
    </div>
  );
};
