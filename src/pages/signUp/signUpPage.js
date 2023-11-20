
import { ErrorMessageStyled, StyledButton, StyledForm, StyledInput } from "components/formStyled"
import { ErrorMessage, Formik } from "formik"
import { Header } from "layout/LayoutStyled"
import { Link, NavLink } from "react-router-dom"

const SignUpPage = ()=>{
    return(
        <main>
        <Header>
        <NavLink to="/">Home</NavLink>
    </Header>
        <div>
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
        <Link to='/login'>Already have an account?</Link>
        </div>
        </main>
    )
}
export default SignUpPage

