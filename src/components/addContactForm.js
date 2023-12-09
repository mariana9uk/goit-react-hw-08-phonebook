import { Formik, ErrorMessage, Form } from 'formik';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  ErrorMessageStyled,
} from './formStyled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contactsOperations';
import { getContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import { Box, Button, Typography } from '@mui/material';

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const handleSubmit = (values, formikBag) => {
    const isContactExists = items.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isContactExists) {
      toast(`Contact with name '${values.name}' already exists!`);
    } else {
      dispatch(addContactThunk(values));
      formikBag.resetForm();
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '15px',
              },
            }}
          >
            <label>
              <Typography
                variant="h4"
                fontWeight="medium"
                fontSize="25px"
                color="#616161"
              >
                Name
              </Typography>
              {/* <h3>Name</h3> */}
              <StyledInput type="text" name="name" placeholder="Type name" />
              <ErrorMessage component={ErrorMessageStyled} name="name" />
            </label>
            <label>
              <Typography
                variant="h4"
                fontWeight="medium"
                fontSize="25px"
                color="#616161"
              >
                Number
              </Typography>
              {/* <h3>Number</h3> */}
              <StyledInput type="tel" name="number" placeholder="Type number" />
              <ErrorMessage component={ErrorMessageStyled} name="number" />
            </label>

            <Button
              type="submit"
              margin="0px"
              variant="contained"
              size="small"
              display="flex"
              sx={{
                my: 2,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Add contact
            </Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
};
