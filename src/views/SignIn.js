import React from 'react';
import PropTypes from 'prop-types';
import { signInUser } from '../api/auth';
import AdminView from './AdminView';

export default function SignIn({ user }) {
  return (
    <>
      {user?.isAdmin ? (
        <>
          <AdminView user={user} />
        </>
      ) : (
        <div className="text-center mt-5">
          <h1>Welcome! Sign In!</h1>
          <button type="button" className="btn btn-success" onClick={signInUser}>
            Sign In
          </button>
        </div>

      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

SignIn.defaultProps = {
  user: null,
};
