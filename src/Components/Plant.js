import React from 'react';
import { Link } from 'react-router-dom';

export default function Plant({ plant }) {
  return (
    // be sure this component is wrapped in a react-router link that takes 
    // the user to the correct detail page
    <Link to={`/greenhouse/${plant.id}`}>
      <div className='plant'>
        <p>{plant.image} </p>
        <h3>{plant.name}</h3>
        <p>A {plant.type} plant that {plant.description}</p>
        <p>Sun exposure for this plant is {plant.sun} and the watering schedule is {plant.water}</p>
      </div>
    </Link>
  );
}
