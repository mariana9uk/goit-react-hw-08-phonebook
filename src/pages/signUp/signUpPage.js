
import { ErrorMessageStyled, StyledButton, StyledForm, StyledInput } from "components/formStyled"
import { ErrorMessage, Formik } from "formik"
import { Header } from "layout/LayoutStyled"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { signUpRequest } from "redux/functionsAxios"

const SignUpPage = ()=>{
    const navigate = useNavigate()
    const handleSubmit=(newUserValues, formikBag)=>{
        signUpRequest(newUserValues)
        const responce = signUpRequest
        if (!responce) {
            toast('Error!')
        } else {
            formikBag.resetForm();
            navigate('/login')
        }
   
    }
    return(
        <main>
        <Header>
        <NavLink to="/">Home</NavLink>
    </Header>
        <div>
 <Formik
            initialValues={{name:'', email:'',
        password:'',}}
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

