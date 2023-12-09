import { Outlet } from 'react-router-dom';
import { Header } from 'components/header';

export const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ backgroundColor: '#cfe8fc' }}>
        <Outlet />
      </div>
    </div>
  );
};
