import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((newCharacters) => setCharacters(newCharacters));
  }, []);

  console.log(characters);


  return (
    <div>
            Character List
    </div>
  );
}
