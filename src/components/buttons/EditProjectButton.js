import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function EditButton({ firebaseKey }) {
  return (
    <Link to={`/editprojects/${firebaseKey}`} className="btn-outline-dark btn">
      <i className="fas fa-edit" />
    </Link>
  );
}

EditButton.propTypes = {
  firebaseKey: PropTypes.string,
};

EditButton.defaultProps = {
  firebaseKey: '',
};
