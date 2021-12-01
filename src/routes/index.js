import React from 'react';
import PropTypes from 'prop-types';
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './AdminRoutes';

export default function Routes({ user }) {
  return (
    <>
      <PublicRoutes user={user} />
      {user?.isAdmin && <AdminRoutes user={user} />}

    </>
  );
}

Routes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Routes.defaultProps = {
  user: null,
};
