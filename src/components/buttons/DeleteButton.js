import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteProject } from '../../api/data/projectData';

export default function DeleteButton({ firebaseKey, setAllProjects }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn-outline-dark btn"
      onClick={() => {
        deleteProject(firebaseKey).then((allProjects) => {
          setAllProjects(allProjects);
          history.push('/adminprojects');
        });
      }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
}

DeleteButton.propTypes = {
  firebaseKey: PropTypes.string,
  setAllProjects: PropTypes.func,
};

DeleteButton.defaultProps = {
  firebaseKey: '',
  setAllProjects: () => {},
};
