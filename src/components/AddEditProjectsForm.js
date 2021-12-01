import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createProject, updateProject } from '../api/data/projectData';

const initialState = {
  name: '',
  description: '',
  firebaseKey: '',
  proImage: '',
  deployedUrl: '',
  gitUrl: '',
};

export default function AddEditProjectsForm({ projectObj }) {
  const [formInput, setFormInput] = useState({ ...initialState });
  const history = useHistory();

  useEffect(() => {
    if (projectObj.firebaseKey) {
      setFormInput({
        name: projectObj.name,
        description: projectObj.description,
        firebaseKey: projectObj.firebaseKey,
        proImage: projectObj.proImage,
        deployedUrl: projectObj.deployedUrl,
        gitUrl: projectObj.gitUrl,
      });
    }
  }, [projectObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectObj.firebaseKey) {
      updateProject(formInput).then(() => {
        resetForm();
        history.push('/adminprojects');
      });
    } else {
      createProject(formInput).then(() => {
        resetForm();
        history.push('/adminprojects');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{projectObj.firebaseKey ? 'EDIT' : 'SAVE'} PROJECT</h1>
      <h5>
        {projectObj.firebaseKey
          ? 'Update project information below!'
          : 'Enter project below'}
      </h5>
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="name"
        id="name"
        value={formInput.name}
        onChange={handleChange}
        label="NAME"
        maxLength="40"
        placeholder="PROJECT NAME"
        required
      />
      <textarea
        className="form-control form-control-lg me-1 input"
        name="description"
        id="description"
        value={formInput.description}
        onChange={handleChange}
        label="DESCRIPTION"
        maxLength="325"
        rows="7"
        placeholder="DESCRIPTION"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="proImage"
        id="proImage"
        value={formInput.proImage}
        onChange={handleChange}
        placeholder="IMAGE URL"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="url"
        name="deployedUrl"
        id="deployedUrl"
        value={formInput.deployedUrl}
        onChange={handleChange}
        placeholder="DEPLOYED URL"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="url"
        name="gitUrl"
        id="gitUrl"
        value={formInput.gitUrl}
        onChange={handleChange}
        placeholder="GIT URL"
        required
      />
      <button className="btn-outline-dark btn-styling" type="submit">
        {projectObj.firebaseKey ? 'UPDATE' : 'SUBMIT'}
      </button>
    </form>
  );
}

AddEditProjectsForm.propTypes = {
  projectObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    proImage: PropTypes.string,
    deployedUrl: PropTypes.string,
    gitUrl: PropTypes.string,
  }),
};

AddEditProjectsForm.defaultProps = { projectObj: {} };
