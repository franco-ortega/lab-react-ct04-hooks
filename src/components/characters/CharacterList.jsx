import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';
import Character from './Character';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((newCharacters) => setCharacters(newCharacters));
  }, []);

  console.log(characters);

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
}
