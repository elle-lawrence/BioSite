import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EditProjectButton from './buttons/EditProjectButton';
import DeleteButton from './buttons/DeleteButton';

const CardStyle = styled.div`
    width: 25rem;
    height: 25rem;
    margin: 20px;
    flex-basis: 2;
`;

export default function ProjectCard({ project, user, setAllProjects }) {
  return (
    <>
      <CardStyle className="card">
        <img src={project.proImage} className="card-img-top" alt="thumbnail of project" />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.deployedUrl} className="btn btn-primary">Deployed</a>
          <a href={project.gitUrl} className="btn btn-primary">Git Code</a>
          {user?.isAdmin ? (
            <>
              <EditProjectButton firebaseKey={project.firebaseKey} />
              <DeleteButton
                firebaseKey={project.firebaseKey}
                setAllProjects={setAllProjects}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </CardStyle>
    </>
  );
}

ProjectCard.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setAllProjects: PropTypes.func.isRequired,
  project: PropTypes.shape({
    deployedUrl: PropTypes.string,
    description: PropTypes.string,
    gitUrl: PropTypes.string,
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    proImage: PropTypes.string,
  }).isRequired,
};

ProjectCard.defaultProps = {
  user: null,
};
