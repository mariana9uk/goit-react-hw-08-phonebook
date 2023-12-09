import { Box, Button, Container, CssBaseline, Typography } from '@mui/material';
import {
  ErrorMessageStyled,
  StyledButton,
  StyledForm,
  StyledInput,
} from 'components/formStyled';
import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { signUpThunk } from 'redux/authOperations';
import { selectAuth, selectUser } from 'redux/selectors';

import * as Yup from 'yup';

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: Yup.string().required('Required'),

  password: Yup.string(0 - 9)
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const SignUpPage = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleSubmit = (newUserValues, formikBag) => {
    dispatch(signUpThunk(newUserValues));

    console.log(name);
    if (name === null) {
      return;
    }
    //  toast.success(`User ${newUserValues.name} created!`)
    formikBag.resetForm();
  };
  return (
    <main>
      <CssBaseline />
      <Container maxWidth="fit-content" bgcolor="#cfe8fc">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#cfe8fc',
          }}
        >
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Box
                sx={{
                  paddingTop: '25px',

                  flexGrow: 1,
                  display: {
                    xs: 'flex',
                    md: 'flex',
                  },
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                <label>
                  <Typography
                    variant="h4"
                    fontWeight="medium"
                    fontSize="20px"
                    color="#616161"
                  >
                    Name
                  </Typography>
                  {/* <h3>Name</h3> */}
                  <StyledInput type="text" name="name" placeholder="Name" />
                  <ErrorMessage component={ErrorMessageStyled} name="name" />
                </label>
                <label>
                  <Typography
                    variant="h4"
                    fontWeight="medium"
                    fontSize="20px"
                    color="#616161"
                  >
                    Email
                  </Typography>
                  {/* <h3>Email</h3> */}
                  <StyledInput type="email" name="email" placeholder="Email" />
                  <ErrorMessage component={ErrorMessageStyled} name="email" />
                </label>
                <label>
                  <Typography
                    variant="h4"
                    fontWeight="medium"
                    fontSize="20px"
                    color="#616161"
                  >
                    Password
                  </Typography>
                  {/* <h3>Password</h3> */}
                  <StyledInput
                    type="text"
                    name="password"
                    placeholder="Type password"
                  />
                  <ErrorMessage
                    component={ErrorMessageStyled}
                    name="password"
                  />
                </label>
                <Button
                  type="submit"
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
                  Submit
                </Button>
                {/* <StyledButton type="submit">Submit</StyledButton> */}
              </Box>
            </Form>
          </Formik>
          <Button
            role="link"
            //   key={login}
            onClick={handleLoginClick}
            sx={{ my: 2, color: '#1976d2', display: 'flex', margin: '0px' }}
          >
            Already have an account?
          </Button>
          {/* <Link to="/login">Already have an account?</Link> */}
          <ToastContainer />
        </div>
      </Container>
    </main>
  );
};
export default SignUpPage;
