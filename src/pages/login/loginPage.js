import { Box, Button, Container, CssBaseline, Typography } from '@mui/material';
import { ErrorMessageStyled, StyledInput } from 'components/formStyled';
import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { loginThunk } from 'redux/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/register');
  };
  const handleSubmit = (userValues, formikBag) => {
    dispatch(loginThunk(userValues));
    formikBag.resetForm();
    // navigate('/contacts')
  };
  return (
    <main>
      <CssBaseline />
      <Container maxWidth="fit-content" bgcolor="#cfe8fc">
        {/* <Header>
            <NavLink to="/">Home</NavLink>
        </Header> */}
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
            initialValues={{ email: '', password: '' }}
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
                    Email
                  </Typography>
                  <StyledInput type="text" name="email" placeholder="Email" />
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
              </Box>
            </Form>
          </Formik>
          <Button
            role="link"
            onClick={handleSignupClick}
            sx={{ my: 2, color: '#1976d2', display: 'flex', margin: '0px' }}
          >
            Don't have an account?
          </Button>
          {/* <Link to='/register'>Don't have an account?</Link> */}
          <ToastContainer />
        </div>
      </Container>
    </main>
  );
};
export default LoginPage;
