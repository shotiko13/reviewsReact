import React from 'react';
import './Card.css';

function Card({ id, name, image, job, text, onLeftClick, onRightClick, onRandom }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h2 className="card-name">{name}</h2>
      <h3 className="card-job">{job}</h3>
      <p className="card-text">{text}</p>
      <div className="card-buttons">
        <button className="card-button" onClick={onLeftClick}>
          {'<'}
        </button>
        <button className="card-button" onClick={onRightClick}>
          {'>'}
        </button>
      </div>
      <button className="card-surprise-button" onClick={onRandom}>
        Surprise me
      </button>
    </div>
  );
}

export default Card;