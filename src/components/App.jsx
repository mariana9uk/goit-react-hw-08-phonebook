import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/login/loginPage';
import SignUpPage from 'pages/signUp/signUpPage';
import ContactsPage from 'pages/contactsPage/contactsPage';
import Home from 'pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/authOperations';
import { RestrictedRoute } from './RestrictedRout';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'layout/layout';
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    'Loading'
  ) : (
    <div style={{}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<SignUpPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to={'/'}/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
