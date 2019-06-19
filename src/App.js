import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  return (<>
    <Header />
    <Switch>
      <Route exact path='/' component={Login} />
    </Switch>
  </>
  );
}

export default App;
