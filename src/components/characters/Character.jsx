import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default function Character({ name, japaneseName, image }) {
  return (
    <div
      className={styles.Character}
      style={
        { border: 'solid', margin: '5px', padding: '5px', width: 'fit-content' }
      }
    >
      <p>
        {name}
      </p>
      <p>
        {japaneseName}
      </p>
      <img src={image} alt={name} style={{ height: '100px' }} />
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
