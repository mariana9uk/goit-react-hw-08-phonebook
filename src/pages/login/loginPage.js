import { ErrorMessageStyled, StyledButton, StyledForm, StyledInput } from "components/formStyled"
import { ErrorMessage, Formik } from "formik"
import { Header } from "layout/LayoutStyled"
import SignUpPage from "pages/signUp/signUpPage"
import { useDispatch } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { loginThunk } from "redux/authOperations"


const LoginPage = ()=>{
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (userValues, formikBag)=>{
    dispatch(loginThunk(userValues))
    formikBag.resetForm()
    // navigate('/contacts')
  }
    return(
      <main>
            {/* <Header>
            <NavLink to="/">Home</NavLink>
        </Header> */}
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#010101',
          }}>
            <Formik
            initialValues={{email:'',
        password:'',}}
        onSubmit={handleSubmit}>
            <StyledForm>
                <label>
                    <h3>Email</h3>
                    <StyledInput type="text" name="email" placeholder="Email" />
            <ErrorMessage component={ErrorMessageStyled} name="email" />
          </label>
          <label>
            <h3>Password</h3>
            <StyledInput type="text" name="password" placeholder="Type password" />
            <ErrorMessage component={ErrorMessageStyled} name="password" />
          </label>
          <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
        </Formik>
<Link to='/register'>Don't have an account?</Link>
<ToastContainer/>
        </div>
        </main>
    )
}
export default LoginPage