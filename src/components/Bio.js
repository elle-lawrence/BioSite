import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import image from '../assets/images/elleinbrooklynhome.jpeg';

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: center;
  row-gap: 30px;
  padding-left: 10vw;
  padding-right: 10vw;
  align-items: left;
  background-color: 
  backdrop-filter: blur(5px);
`;

export default function Bio({ longIntro }) {
  return (
    <>
      <BioContainer>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <h4>ELLE LAWRENCE</h4>
        <p>
          {longIntro.longDescription}
        </p>
      </BioContainer>
    </>
  );
}

Bio.propTypes = {
  longIntro: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    homeImage: PropTypes.string,
    aboutMeImage: PropTypes.string,
    git: PropTypes.string,
  }).isRequired,
};
