import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route {...rest} render={ props => localStorage.getItem("api_token") ? <Component {...props} /> : <Redirect to="/login" /> } />
}

export default PrivateRoute;