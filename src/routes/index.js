import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from '../views/AboutMe';
import Home from '../views/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/home']} component={Home} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/projects" />
      <Route exact path="/techstack" />
      <Route exact path="/contactme" />
    </Switch>
  );
}
