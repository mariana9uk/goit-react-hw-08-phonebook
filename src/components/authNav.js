import { NavLink } from "react-router-dom";
 const AuthNavigation = () => {
  return (
    <div>
      <NavLink to="/register">SignUp</NavLink>
      /
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};


export default AuthNavigation