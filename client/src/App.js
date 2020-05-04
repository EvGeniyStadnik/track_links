import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Pages from './pages';
import AuthGate from "./modules/AuthGate";
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';
import NavBar from './components/NavBar';

function App() {
  let {login, logout, userId, token} = useAuth();
  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider value={{login, logout, userId, token, isAuthenticated}}>
      <Router>
        <AuthGate isAuthenticated={isAuthenticated}>
          <NavBar/>
          <Pages/>
        </AuthGate>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
