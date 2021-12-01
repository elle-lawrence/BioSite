import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { updatePersonal } from '../api/data/personalData';

const PersonalFormStyling = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const initialState = {
  firebaseKey: '',
  name: '',
  shortDescription: '',
  longDescription: '',
  homeImage: '',
  aboutMeImage: '',
  git: '',
};

export default function EditPersonalForm({ personal, setPersonal }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (personal.firebaseKey) {
      setFormInput(personal);
    }
    // DEPENDENCY ARRAY WATCHES JUST THE OBJ TO CHANGE;
  }, [personal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(personal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePersonal(formInput).then((personalObj) => {
      setPersonal(personalObj);
      resetForm();
      history.push('/adminview');
    });
  };

  return (
    <>
      <PersonalFormStyling onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg me-1"
          type="text"
          name="name"
          id="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control form-control-lg me-1"
          type="text"
          name="shortDescription"
          id="shortDescription"
          value={formInput.shortDescription}
          label="DESCRIPTION"
          maxLength="325"
          rows="7"
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control form-control-lg me-1"
          type="text"
          name="longDescription"
          id="longDescription"
          value={formInput.longDescription}
          label="DESCRIPTION"
          maxLength="725"
          rows="20"
          onChange={handleChange}
          required
        />
        <input
          className="form-control form-control-lg me-1"
          type="img"
          name="homeImage"
          id="homeImage"
          value={formInput.homeImage}
          onChange={handleChange}
          required
        />
        <input
          className="form-control form-control-lg me-1"
          type="img"
          name="aboutMeImage"
          id="aboutMeImage"
          value={formInput.aboutMeImage}
          onChange={handleChange}
          required
        />
        <input
          className="form-control form-control-lg me-1"
          type="url"
          name="git"
          id="git"
          value={formInput.git}
          onChange={handleChange}
          required
        />
        <button className="btn btn-success" type="submit">
          UPDATE
        </button>
      </PersonalFormStyling>
    </>
  );
}

EditPersonalForm.propTypes = {
  personal: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    homeImage: PropTypes.string,
    aboutMeImage: PropTypes.string,
    git: PropTypes.string,
  }),
  setPersonal: PropTypes.func.isRequired,
};

EditPersonalForm.defaultProps = { personal: {} };
