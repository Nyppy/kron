import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/login';
import Registry from './pages/registry';
import RecoveryPass from './pages/recovery-pass';

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
      </Switch>
    </Router>
  );
}

export default App;
