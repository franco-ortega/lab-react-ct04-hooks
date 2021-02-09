import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterDetails({
  id,
  name,
  japaneseName,
  image,
  quote,
  personality,
  species,
  skill,
  goal,
  roast,
  milk,
  sugar
})
{
  return (
    <>
        Character Details
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h2>{japaneseName}</h2>
      <h2><img src={image} alt={name} style={{ height: '100px' }} /></h2>
      <h2>{quote}</h2>
      <h2>{personality}</h2>
      <h2>{species}</h2>
      <h2>{skill}</h2>
      <h2>{goal}</h2>
      <h2>{roast}</h2>
      <h2>{milk}</h2>
      <h2>{sugar}</h2>
    </>
  );
}

CharacterDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  milk: PropTypes.string.isRequired,
  sugar: PropTypes.string.isRequired
};
