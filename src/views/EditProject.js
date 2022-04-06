import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AddEditProjectsForm from '../components/AddEditProjectsForm';
import { getSingleProject } from '../api/data/projectData';

export default function EditProject() {
  const [editProject, setEditProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSingleProject(firebaseKey).then((project) => {
      if (isMounted) setEditProject(project);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <AddEditProjectsForm projectObj={editProject} />
    </div>
  );
}

EditProject.propTypes = {
  projectObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    proImage: PropTypes.string,
    deployedUrl: PropTypes.string,
    gitUrl: PropTypes.string,
  }),
}.isRequired;

EditProject.defaultProps = { stuffObj: {} };
