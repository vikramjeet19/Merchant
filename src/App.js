import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import List from './Components/List/List';
import Add from './Components/Merchant/add';

function App() {
  return (<>
    <Header />
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/add' component={Add}/>
      <Route exact path='/list' component={List}/>
    </Switch>
  </>
  );
}

export default App;
