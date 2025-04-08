import React from 'react';
import '../styles/card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;