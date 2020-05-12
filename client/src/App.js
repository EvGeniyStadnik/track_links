import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Pages from './pages';
import AuthGate from "./modules/AuthGate";
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';
import NavBar from './components/NavBar';
import NotificationMessage from "./components/NotificationMessage";
import {useMessage} from "./hooks/message.hook";

function App() {
  const {login, logout, userId, token} = useAuth();
  const notification = useMessage()

  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider value={{login, logout, userId, token, notification}}>
      <Router>
        <AuthGate isAuthenticated={isAuthenticated}>
          <NavBar/>
          <Pages/>
        </AuthGate>
      </Router>
      <NotificationMessage/>
    </AuthContext.Provider>
  );
}

export default App;
