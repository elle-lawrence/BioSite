import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminProjects from '../views/AdminProjects';
import AdminView from '../views/AdminView';
import EditPersonalData from '../views/EditPersonalData';
import NewProjects from '../views/NewProjects';
import EditProject from '../views/EditProject';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/adminview" component={() => <AdminView user={user} />} />
      <Route exact path="/editaboutme" component={EditPersonalData} />
      <Route exact path="/adminprojects" component={() => <AdminProjects user={user} />} />
      <Route exact path="/adminprojects/new" component={NewProjects} />
      <Route exact path="/editprojects/:firebaseKey" component={EditProject} />
      {/* <Route exact path="/techstack" component={TechStack} /> */}
      {/* <Route exact path="/contactme" /> */}
      {/* <Route exact path="/sign-in" /> */}
    </Switch>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

AdminRoutes.defaultProps = {
  user: null,
};
