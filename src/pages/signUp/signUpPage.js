
import { ErrorMessageStyled, StyledButton, StyledForm, StyledInput } from "components/formStyled"
import { ErrorMessage, Formik } from "formik"

const SignUpPage = ()=>{
    return(
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

        </div>
    )
}
export default SignUpPage

