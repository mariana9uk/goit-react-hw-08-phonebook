import { ErrorMessageStyled, StyledButton, StyledForm, StyledInput } from "components/formStyled"
import { ErrorMessage, Formik } from "formik"
import { Header } from "layout/LayoutStyled"
import SignUpPage from "pages/signUp/signUpPage"
import { Link, NavLink } from "react-router-dom"

const LoginPage = ()=>{
    return(
      <main>
            <Header>
            <NavLink to="/">Home</NavLink>
        </Header>
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
        password:'',}}>
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
        </div>
        </main>
    )
}
export default LoginPage