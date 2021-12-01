import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AboutMe from '../views/AboutMe';
import Home from '../views/Home';
import Projects from '../views/Projects';
import TechStack from '../views/TechStack';
import SignIn from '../views/SignIn';
import ContactMe from '../views/ContactMe';

export default function PublicRoutes({ user }) {
  return (
    <Switch>
      <Route exact path={['/', '/home']} component={Home} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/techstack" component={TechStack} />
      <Route exact path="/contactme" component={ContactMe} />
      <Route exact path="/signin" component={() => <SignIn user={user} />} />
    </Switch>
  );
}

PublicRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

PublicRoutes.defaultProps = {
  user: null,
};
