import { NavLink, Outlet } from "react-router-dom"
import { Header } from "./LayoutStyled"
import AuthNavigation from "./authNav"
const Layout =()=>{

    return(
        <main>
<Header>
    
<NavLink to="/">Home</NavLink>
{<AuthNavigation/>}
</Header>
<Outlet/>
        </main>
    )
}
export default Layout