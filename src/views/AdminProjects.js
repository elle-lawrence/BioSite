import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getAllProjects } from '../api/data/projectData';
import ProjectCard from '../components/ProjectCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  margin-top: 70vh;
  flex-grow: 2;
`;

export default function AdminProjects({ user }) {
  const [projects, setAllProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then(setAllProjects);
  }, []);
  return (
    <>
      <Link to="/adminprojects/new" className="btn-outline-dark btn">
        Add New Project
      </Link>

      <CardContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.firebaseKey}
            setAllProjects={setAllProjects}
            project={project}
            user={user}
          >
            project.name
          </ProjectCard>
        ))}
      </CardContainer>
    </>
  );
}

AdminProjects.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

AdminProjects.defaultProps = {
  user: null,
};
