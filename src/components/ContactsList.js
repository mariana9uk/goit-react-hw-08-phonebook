import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContactThunk, getContactsThunk } from 'redux/contactsOperations';
import { Box, Button, List, ListItemText, Typography } from '@mui/material';

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
    <li key={contact.id} alignItems="flex-start">
      <Box
        height="100%"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '50px',
          alignItems: 'center',
        }}
      >
        <ListItemText>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="#616161"
          >
            {contact.name}:{contact.number}
          </Typography>
        </ListItemText>
        <Button
          margin="0px"
          variant="contained"
          type="button"
          onClick={() => dispatch(deleteContactThunk(contact.id))}
          sx={{ marginTop: '0', marginBottom: '0px', my: 2, color: 'white' }}
          size="small"
        >
          Delete
        </Button>
      </Box>
    </li>
  ));
  return (
    <div>
      <div>
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
      </div>

      <List>{contactsListItems}</List>
      <ToastContainer />
    </div>
  );
};
