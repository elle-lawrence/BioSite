import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getAllProjects from '../api/data/projectData';
import ProjectCard from '../components/ProjectCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  margin-top: 70vh;
  flex-grow: 2;
`;

export default function Projects() {
  const [projects, setAllProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then(setAllProjects);
  }, []);

  return (
    <CardContainer>
      {projects.map((project) => (
        <ProjectCard
          key={project.firebaseKey}
          project={project}
        >
          project.name
        </ProjectCard>
      ))}
    </CardContainer>
  );
}
