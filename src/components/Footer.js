import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOutUser } from '../api/auth';

export default function Footer({ user }) {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https:/google.com">Elle Lawrence</a>
        {user?.isAdmin ? (
          <>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={signOutUser}
            >
              <i className="fas fa-sign-out-alt" />
            </button>
          </>
        ) : (
          <Link className="linkStyling" to="/signin">
            SIGNIN
          </Link>
        )}
      </div>
    </nav>
  );
}

Footer.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Footer.defaultProps = {
  user: null,
};
