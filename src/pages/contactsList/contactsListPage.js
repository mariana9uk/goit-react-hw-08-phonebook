import { ContactsList } from "components/ContactsList"
import { Filter } from "components/Filter"
import { ToastContainer } from "react-toastify"

export const ContactsListPage = ()=>{
    return(
        <div>
             <h2>My Contacts</h2>
      <Filter />
      <ContactsList />
      <ToastContainer/>
        </div>
    )
}