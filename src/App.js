import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CompagniesList from "./Components/CompagniesList";
import ActionsList from "./Components/ActionsList";
import './App.css';

//Layout
import Main from './Layout/Main';

const App = () => (
  <Switch>
      <Route exact path='/' component={CompagniesList}/>
      <Route exact path='/compagnie/:id/actions' component={ActionsList}/>
    </Switch>
);
export default App;
