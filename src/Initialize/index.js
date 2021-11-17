import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Routes from '../routes';

const MainContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
 width: 100vw;
`;

function Initialize() {
  return (
    <>
      <MainContainer>
        <Navigation />
        <Routes />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Initialize;
