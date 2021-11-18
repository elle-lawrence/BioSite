import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardStyle = styled.div`
    width: 25rem;
    height: 25rem;
    margin: 20px;
    flex-basis: 2;
`;

export default function ProjectCard({ project }) {
  return (
    <>
      <CardStyle className="card">
        <img src={project.proImage} className="card-img-top" alt="thumbnail of project" />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.deployedUrl} className="btn btn-primary">Deployed</a>
          <a href={project.gitUrl} className="btn btn-primary">Git Code</a>
        </div>
      </CardStyle>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    deployedUrl: PropTypes.string,
    description: PropTypes.string,
    gitUrl: PropTypes.string,
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    proImage: PropTypes.string,
  }).isRequired,
};
