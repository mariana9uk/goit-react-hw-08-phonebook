import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './LayoutStyled';
import AuthNavigation from './authNav';
import UserMenu from 'components/UserMenu';
const Layout = () => {
  return (

<main> 
      <Header>
        <NavLink to="/">Home</NavLink>
        <AuthNavigation />
        <UserMenu/>
      </Header>
      <Outlet />
    </main>
  );
};
export default Layout;
