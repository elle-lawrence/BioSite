import React from 'react';
import styled from 'styled-components';

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

export default function Bio() {
  return (
    <>
      <BioContainer>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
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
          Bio info goes here. blah blah blah
        </p>
      </BioContainer>
    </>
  );
}
