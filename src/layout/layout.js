import { NavLink, Outlet } from 'react-router-dom';

import AuthNavigation from '../components/authNav';
import UserMenu from 'components/UserMenu';
import { selectAuth } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation';
import { Header } from 'components/header';
import { Container } from '@mui/material';




export const Layout = () => {
  const {isLoggedIn, isLoading}= useSelector(selectAuth) 

  return (
<div>
    <div>
    <Header/>
    </div>
<main> 

      <Outlet />
    </main>
    </div>
  );
};
// export default Layout;


