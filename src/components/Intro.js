import React from 'react';
import styled from 'styled-components';
import image from '../assets/images/headShot.jpg';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  justify-content: center;
  row-gap: 30px;
  padding-left: 10vw;
  padding-right: 10vw;
  align-items: center;
  background-color: 
  backdrop-filter: blur(5px);
  
  img {
    max-width: 200px;
    border-radius: 100%;
  }

  .textDiv{
    padding-left: 10vw;
  }
`;

export default function Intro() {
  return (
    <IntroContainer>
      <div className="imgDiv">
        <img src={image} className="img-fluid" alt="Elle Home profile pic" />
      </div>
      <div className="textDiv">
        <h2>ELLE LAWRENCE</h2>
        <p>heres some info about elle. click to find out more.</p>
      </div>
    </IntroContainer>
  );
}
