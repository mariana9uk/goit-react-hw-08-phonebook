import UserMenu from 'components/UserMenu';
import { Header } from 'layout/LayoutStyled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contactsOperations';
const { ContactsList } = require('components/ContactsList');
const { Filter } = require('components/Filter');
const { ContactForm } = require('components/addContactForm');
const { ToastContainer } = require('react-toastify');

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <main>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
        <ToastContainer />
      </div>
    </main>
  );
};
export default ContactsPage;
