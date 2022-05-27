import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Login Page
import Login from "./pages/login";

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = useSelector(state => state.Admin.token);

    return token ? <Route {...rest} component={(props) => <Component {...props}/>}/> : <Login/>
}

export default PrivateRoute;
