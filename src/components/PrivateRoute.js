import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

import { selectAuth } from 'redux/selectors';
export const PrivateRoute = ({component: Component, redirectTo="/" })=>{
    const location=useLocation()
const {isLoggedIn, isRefreshing} = useSelector(selectAuth)
const redirect = !isLoggedIn && !isRefreshing
    return redirect ? < Navigate to={redirectTo} state={{from:location}}/> : Component;
}