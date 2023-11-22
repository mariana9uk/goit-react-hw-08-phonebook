import {
  ErrorMessageStyled,
  StyledButton,
  StyledForm,
  StyledInput,
} from 'components/formStyled';
import { ErrorMessage, Formik } from 'formik';
import { Header } from 'layout/LayoutStyled';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { signUpRequest } from 'redux/functionsAxios';
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
    // email: Yup.string().email('Invalid email').required('Required'),
    // password: Yup.string()
    // .min(7, 'Too Short!')
    // .max(50, 'Too Long!')
    // .required('Required'),
  });

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (newUserValues, formikBag) => {
    signUpRequest(newUserValues);
    const responce = signUpRequest(newUserValues);
    console.log(responce)
    if (responce.ok) {
        formikBag.resetForm();
      navigate('/login');
     
    } else {
        toast('Error!');
    }
  };
  return (
    <main>
      <Header>
        <NavLink to="/">Home</NavLink>
      </Header>
      <div>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <label>
              <h3>Name</h3>
              <StyledInput type="text" name="name" placeholder="Name" />
              <ErrorMessage component={ErrorMessageStyled} name="name" />
            </label>
            <label>
              <h3>Email</h3>
              <StyledInput type="email" name="email" placeholder="Email" />
              <ErrorMessage component={ErrorMessageStyled} name="email" />
            </label>
            <label>
              <h3>Password</h3>
              <StyledInput
                type="text"
                name="password"
                placeholder="Type password"
              />
              <ErrorMessage component={ErrorMessageStyled} name="password" />
            </label>
            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </Formik>
        <Link to="/login">Already have an account?</Link>
        <ToastContainer/>
      </div>
    </main>
  );
};
export default SignUpPage;
