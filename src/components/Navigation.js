import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-left: 10vw;
  align-items: left;
  background-color: 
  backdrop-filter: blur(5px);
\

  .linkStyling {
    color: #444430;
    font-size: 15px;
    text-decoration: none;
  }

  a:active {
    color: #a56a26;
  }

  a:hover {
    text-shadow: 2px 2px #a9a29e;
  }
`;

export default function Navigation() {
  return (
    <NavBar>
      <Link className="linkStyling" to="/home">
        <h4>DEVELOPER &</h4>
        <h4>DESIGNER</h4>
      </Link>
      <Link className="linkStyling" to="/aboutme">
        ABOUT ME
      </Link>
      <Link className="linkStyling" to="/projects">
        PROJECTS
      </Link>
      <Link className="linkStyling" to="/techstack">
        TECH STACK
      </Link>
      <Link className="linkStyling" to="/contactme">
        CONTACT ME
      </Link>
    </NavBar>
  );
}
