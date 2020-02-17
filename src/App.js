import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Menu from './components/menu';
import CreateIncident from './components/create_incident';
import CreateUser from './components/create_user';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Switch>
            <Route exact strict path="/create_incident" component={CreateIncident}/>
            <Route exact strict path="/login_signup" component={CreateUser}/>
        </Switch>
    </div>
    </BrowserRouter>    
  );
}

export default App;
