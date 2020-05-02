import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Pages from './pages';
import AuthGate from "./modules/AuthGate";

function App() {
  return (
    <Router>
      <AuthGate isAuthenticated={false}>
        <Pages/>
      </AuthGate>
    </Router>
  );
}

export default App;
