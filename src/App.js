import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLogin from './components/login';
import MainRegister from './components/register';
import MainRecuveryPass from './components/recuvery_pass';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/login'>
            <MainLogin />
          </Route>
          <Route path='/register'>
            <MainRegister />
          </Route>
          <Route path='/recuvery'>
            <MainRecuveryPass />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
