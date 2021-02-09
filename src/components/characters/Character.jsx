import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name, image }) {
  return (
    <div
      style={
        { border: 'solid', margin: '5px', padding: '5px', width: 'fit-content' }
      }
    >
      <p>
        {name}
      </p>
      <img src={image} alt={name} style={{ height: '100px' }} />
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
