import { Header } from "layout/LayoutStyled"
import { NavLink } from "react-router-dom"


const Home = ()=>{
    return(
        <main>
        {/* <Header>
        <NavLink to="/register">SignUp</NavLink>
                <NavLink to="/login">Login</NavLink>
        </Header> */}
               
        <div>
            <h1>Phonebook</h1>
        </div>
        </main>
    )
}
export default Home