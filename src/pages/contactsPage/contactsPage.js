import { Box, Container, CssBaseline, Typography } from '@mui/material';
// import UserMenu from 'components/UserMenu';
// import { Header } from 'layout/LayoutStyled';
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
      <CssBaseline />
      <Container maxWidth="fit-content" bgcolor="#cfe8fc">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '20px', md: '150px' },
            bgcolor: '#cfe8fc',
            justifyContent: 'center',
            
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h2"
              fontWeight="medium"
              fontSize="35px"
              align="center"
              color="#616161"
              marginTop="25px"
              marginBottom="20px"
            >
              Create a new contact
            </Typography>
            {/* <h1>Phonebook</h1> */}
            <ContactForm />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
             
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h3"
              align="center"
              fontWeight="medium"
              fontSize="35px"
              marginTop="25px"
              marginBottom="20px"
              color="#616161"
            >
              Your contacts
            </Typography>
            {/* <h2>Contacts</h2> */}

            <Filter />
            <ContactsList />
          </Box>
          </Box>
        <ToastContainer />
      </Container>
    </main>
  );
};
export default ContactsPage;
