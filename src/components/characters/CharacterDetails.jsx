import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterDetails({
  name,
  japaneseName,
  image,
  quote,
  personality,
  species,
  skill,
  goal,
  // coffee
})
{
  return (
    <>
        Character Details
      <h2>{name}</h2>
      <h2>{japaneseName}</h2>
      <img src={image} alt={name} style={{ height: '100px' }} />
      <p>{quote}</p>
      <p>{personality}</p>
      <p>{species}</p>
      <p>{skill}</p>
      <p>{goal}</p>
      {/* <p>{coffee.roast}</p>
      <p>{coffee.milk}</p>
      <p>{coffee.sugar}</p> */}
    </>
  );
}

CharacterDetails.propTypes = {
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  // coffee: PropTypes.object.isRequired,
  // roast: PropTypes.string.isRequired,
  // milk: PropTypes.string.isRequired,
  // sugar: PropTypes.string.isRequired
};
