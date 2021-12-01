import React from 'react';
import PropTypes from 'prop-types';

export default function AdminView({ user }) {
  return (
    <>
      {user?.isAdmin ? (<h2>Admin view</h2>) : (<h2>no</h2>)}
    </>
  );
}
AdminView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

AdminView.defaultProps = {
  user: null,
};
