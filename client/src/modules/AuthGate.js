import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import AuthPage from "../pages/AuthPage";

const AuthGate = ({children, isAuthenticated=false}) => {

  return (
    isAuthenticated ?
      children :
      <Switch>
        <Route>
          <AuthPage path='/'/>
        </Route>
        <Redirect to='/'/>
      </Switch>
  )
}

export default AuthGate;