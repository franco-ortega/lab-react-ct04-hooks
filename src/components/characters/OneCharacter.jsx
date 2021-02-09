import React, { useState, useEffect } from 'react';
import { getCharacter } from '../services/getCharacter';
import CharacterDetails from './CharacterDetails';
import PropTypes from 'prop-types';

export default function CharacterList({ match }) {
    
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacter(match.params.id)
      .then((newCharacter) => {
        setCharacter(newCharacter);
        setLoading(false);
      });
  }, []);

  if(loading) return <h2>Loading</h2>;
  return (
    <ul data-testid="character">
      <CharacterDetails {...character} />
    </ul>
  );
}

CharacterList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};
