import ContactsPage from "pages/contactsPage/contactsPage"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectAuth } from "redux/selectors"

export const Navigation =()=>{
    const{isLoggedIn}=useSelector(selectAuth)
    return(
        <div>
             <NavLink to="/">Home</NavLink>
            {isLoggedIn&&<NavLink to="/contacts">Contacts</NavLink>}
        </div>
    )
}