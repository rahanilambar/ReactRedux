import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

const AuthenticatedRoute = (props) => {
    if(AuthenticationService.isLoggedIn()){
        return <Route {...props}></Route>
    }
    return <Redirect to="/login"></Redirect>
}

export default AuthenticatedRoute;