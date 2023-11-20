// import { ContactForm } from './form';
// import { ContactsList } from './ContactsList';
// import { Filter } from './Filter';
// import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
// import Layout from 'layout/layout';
import LoginPage from 'pages/login/loginPage';
import SignUpPage from 'pages/signUp/signUpPage';
import ContactsPage from 'pages/contactsPage/contactsPage';
import Home from 'pages/Home';

export const App = () => {
  return (
    <div
      style={{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // color: '#010101',
      }}
    >
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route index element={<Home />} /> */}
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/register' element={<SignUpPage/>}/>
     <Route path='/contacts' element={<ContactsPage/>}/>
     <Route path="*" element={<Home />} />
    
  
      </Routes>
      {/* <ContactsPage/> */}
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <ToastContainer/> */}
    </div>
  );
};
