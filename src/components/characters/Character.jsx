import React from 'react';

export default function Character() {
  return (
    <div>
      Character
      <ul>
        <li>
          {characters.map(character => {
            <li>{character.name}</li>;
          })}
        </li>
      </ul>
    </div>
  );
}
