export const getCharacters = async() => {
  return await fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((characters) => characters.map(character => ({
      id: character._id,
      name: character.name,
      japaneseName: character.japaneseName,
      image: character.image,
      quote: character.quote,
      personality: character.personality,
      species: character.species,
      skill: character.skill,
      goal: character.goal,
      roast: character.coffee.roast,
      milk: character.coffee.milk,
      sugar: character.coffee.sugar
    })));
};
