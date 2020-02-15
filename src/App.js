import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Menu from './components/menu';
import CreateIncident from './components/create_incident';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Switch>
            <Route exact strict path="/create_incident" component={CreateIncident}/>
        </Switch>
    </div>
    </BrowserRouter>    
  );
}

export default App;
