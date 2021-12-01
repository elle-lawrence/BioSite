import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Routes from '../routes/index';
import AdminNav from '../components/AdminNav';

const MainContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
 width: 100vw;
`;

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          uid: authed.uid,
          name: authed.displayName,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <MainContainer>
        {user?.isAdmin ? (<AdminNav />) : (<Navigation />)}
        <Routes user={user} />
      </MainContainer>
      <Footer user={user} />
    </>
  );
}

export default Initialize;
