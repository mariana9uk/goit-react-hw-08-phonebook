import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();
  const { isLoggedIn } = useSelector(selectAuth);
  return isLoggedIn ? (
    <Navigate to={location.state.from || redirectTo} />
  ) : (
    Component
  );
};
