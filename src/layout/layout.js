import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './LayoutStyled';
import AuthNavigation from '../components/authNav';
import UserMenu from 'components/UserMenu';
import { selectAuth } from 'redux/selectors';
import { useSelector } from 'react-redux';
const Layout = () => {
  const {isLoggedIn, isLoading}= useSelector(selectAuth) 

  return (

<main> 
      <Header>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? <UserMenu/> : <AuthNavigation />}
       
        </Header>
      <Outlet />
    </main>
  );
};
export default Layout;
