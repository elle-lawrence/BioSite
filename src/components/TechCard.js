import React from 'react';
import PropTypes from 'prop-types';

export default function TechCard({ tech }) {
  return (
    <div className="card">
      <img src={tech.img} className="card-img-top" alt="tech logo" height="70" width="70" />
      <div className="card-body">
        <p className="card-text">{tech.name}</p>
      </div>
    </div>
  );
}

TechCard.propTypes = {
  tech: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
  }),
}.isRequired;
