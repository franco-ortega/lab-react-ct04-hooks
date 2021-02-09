import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <Link
      key={character.id}
      to={`character/${character.id}`}
    >
      <li>
        <Character {...character} />
      </li>
    </Link>
  ));

  if(loading) return <h2>Loading...please wait...</h2>;
  return (
    <ul>
      {characterElements}
    </ul>
  );
}
