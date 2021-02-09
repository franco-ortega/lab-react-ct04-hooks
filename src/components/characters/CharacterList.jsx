import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';
import Character from './Character';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters()
      .then((newCharacters) => {
        setCharacters(newCharacters);
        setLoading(false);
      });
  }, []);

  console.log(characters);
  console.log(loading);

  const characterElements = characters.map(character => (
    <li key={character.id}>
      {character.name}
      {/* <Character {...character} /> */}
    </li>
  ));

  if(loading) return <h1>Loading...please wait...</h1>;
  return (
    <ul>
      {characterElements}
    </ul>
  );
}
