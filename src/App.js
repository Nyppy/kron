import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/login';
import Registry from './pages/registry';
import RecoveryPass from './pages/recovery-pass';
import PrivatOffice from './pages/private-office';
import PrivatOfficeDriver from './pages/private-office-driver';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Registry />
          </Route>
          <Route path='/recuvery'>
            <RecoveryPass />
          </Route>
          <Route path='/private_office'>
            <PrivatOffice />
          </Route>
          <Route path='/private_office_driver'>
            <PrivatOfficeDriver />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
