import React from 'react';
import MainNav from './components/navbar';
import HomePage from './components/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <Switch>
        <Route path="/">
        <HomePage />
        </Route>
          Hello
        </Switch>
      </div>
    </Router>
  );
}

export default App;
