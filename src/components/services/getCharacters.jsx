export const getCharacters = async() => {
  return await fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((characters) => characters.map(character => ({
      id: character._id,
      name: character.name,
      japaneseName: character.japaneseName,
      image: character.image
    })));
};
