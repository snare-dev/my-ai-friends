import React from 'react';

import './Card.css';


const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${props.user.id}?set=any&size=200x200`}
        alt={props.user.name}
      />
      <h2>{props.user.name}</h2>
      <p>{props.user.email}</p>
    </div>
  );
};

export default Card;
