import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Project1, Project2 } from './pages/Projects';

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project-1" component={Project1} />
        <Route exact path="/project-2" component={Project2} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
  );
};

export default App;